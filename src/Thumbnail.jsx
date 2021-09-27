import React, { useState, useRef, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
// TODO
// Throughly test giving width, default width etc

export const Thumbnail = ({
  url = "https://nodejs.org/en/download/",
  height: heightProp,
  width: widthProp,
  interactive = false,
  iframeWidth: iframeWidthProp,
  iframeHeight: iframeHeightProp,
  style: customStyle,
  onLoad,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [calculatedSize, setCalculatedSize] = useState({});
  const ref = useRef(null);
  useEffect(() => {
    setCalculatedSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
    // console.log("width", ref.current ? ref.current.offsetWidth : 0);
    // console.log("height", ref.current ? ref.current.offsetHeight : 0);
    // console.log("----------------------------");
  }, [ref.current?.offsetWidth, ref.current?.offsetHeight]);

  let width;
  if (!widthProp) {
    width = "100%";
  } else {
    width = `${widthProp}px`;
  }

  let height;
  if (!heightProp) {
    height = "100%";
  } else {
    height = `${heightProp}px`;
  }

  let aspectRatioHeight = 3;
  let aspectRatioWidth = 4;
  if (widthProp && heightProp) {
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

  const xscale = calculatedSize.width / iframeWidth;
  const yscale = calculatedSize.height / iframeHeight;

  const outerWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
  };

  const iframeWrapper = {
    width: calculatedSize.width,
    maxHeight: calculatedSize.height,
  };

  const iframe = {
    transform: `scaleX(${xscale}) scaleY(${yscale})`,
    transformOrigin: "0 0",
    width: `${iframeWidth}px`,
    height: `${iframeHeight}px`,
    border: "0px",
  };

  const iframeShade = {
    position: "absolute",
    width: calculatedSize.width,
    height: calculatedSize.height,
    zIndex: "10",
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
      {ref.current && (
        <div style={iframeWrapper} data-testid="div-iframe-wrapper">
          {!interactive && <div style={iframeShade}> </div>}
          {loading && (
            <Skeleton
              style={{ position: "absolute", zIndex: "15" }}
              width={calculatedSize.width}
              height={calculatedSize.height}
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
            {...props}
          />
        </div>
      )}
    </div>
  );
};
export default Thumbnail;

Thumbnail.propTypes = {
  /**
   * The url of the webpage to render the thumbnail for
   */
  url: PropTypes.string,
  /**
   * The height of the entire component. iframe will be scaled down to this height. Defaults to be 100% of parent element
   */
  height: PropTypes.number,
  /**
   * The width of the entire component. iframe will be scaled down to this width. Defaults to be 100% of parent element
   */
  width: PropTypes.number,
  /**
   * Whether this iframe is to be static or interactive (clickable).
   */
  interactive: PropTypes.bool,
  /**
   * The width of the iframe viewport. Defaults to 1440px if both iframewidth and iframeheight is not provided
   */
  iframeWidth: PropTypes.number,
  /**
   * The height of the iframe viewport. Defaults to 1080px if both iframewidth and iframeheight is not provided
   */
  iframeHeight: PropTypes.number,
  /**
   * customized styling to be passed to the wrapper (div) of the component consisting the iframe
   */
  style: PropTypes.object,
  /**
   * customized function which will be called when iframed webpage finishes loading
   */
  onLoad: PropTypes.func,
};

Thumbnail.defaultProps = {
  url: "https://nodejs.org/en/download/",
  interactive: false,
};
