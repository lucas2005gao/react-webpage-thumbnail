import React, { useState, useRef, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

function Thumbnail({
  url = "https://canvas.ac.nz/",
  height = 150,
  width = 200,
  interactive = false,
  iframeWidth: iframeWidthProp,
  iframeHeight: iframeHeightProp,
  style: customStyle,
  onLoad,
}) {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  let aspectRatioHeight = 3;
  let aspectRatioWidth = 4;
  if (width && height) {
    aspectRatioHeight = height;
    aspectRatioWidth = width;
  }

  // Dealing with Height and Width
  // Variables to do with size and scale:
  // - width, height, iframeWidth, iframeHeight, xscale, yscale
  let iframeWidth = iframeWidthProp;
  let iframeHeight = iframeHeightProp;
  if (!iframeWidth && !iframeHeight) {
    iframeWidth = 1440;
    iframeHeight = 1080;
  } else if (iframeWidth && !iframeHeight) {
    iframeHeight = iframeWidth * (aspectRatioHeight / aspectRatioWidth);
  } else if (!iframeWidth && iframeHeight) {
    iframeWidth = iframeHeight * (aspectRatioWidth / aspectRatioHeight);
  }

  const xscale = width / iframeWidth;
  const yscale = height / iframeHeight;
  const iframe = {
    transform: `scaleX(${xscale}) scaleY(${yscale})`,
    transformOrigin: "0 0",
    width: `${iframeWidth}px`,
    height: `${iframeHeight}px`,
    border: "0px",
  };

  const iframeShade = {
    position: "absolute",
    width: "100%",
    height: `${height}px`,
    maxWidth: `${width}px`,
    zIndex: "10",
  };

  const iframeWrapper = {
    maxWidth: `${width}px`,
    maxHeight: `${height}px`,
  };

  const outerWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  const combinedOnLoad = () => {
    if (onLoad) {
      onLoad();
    }
    setLoading(false);
  };

  return (
    <div
      ref={ref}
      style={{ ...outerWrapper, ...customStyle }}
      data-testid="div-outer-wrapper"
    >
      <div style={iframeWrapper} data-testid="div-iframe-wrapper">
        {!interactive && <div style={iframeShade}> </div>}
        {loading && (
          <Skeleton
            style={{ position: "absolute", zIndex: "15" }}
            width={width}
            height={height}
            duration={0.8}
          />
        )}
        <iframe
          tabIndex="-1"
          style={iframe}
          title="webpage-thumbnail"
          src={url}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
          onLoad={combinedOnLoad}
        />
      </div>
    </div>
  );
}
// TODO write proptypes
export default Thumbnail;
