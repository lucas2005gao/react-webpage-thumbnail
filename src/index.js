import React from "react";

function Thumbnail({
  url = "https://canvas.ac.nz/",
  iframeWidth = 1500,
  iframeHeight = 1500,
  width = 150,
  height = 150,
  interactive = false,
}) {
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
    position: "fixed",
    width: "100%",
    height: "100%",
    maxWidth: `${width}px`,
    maxHeight: `${height}px`,
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

  return (
    <div style={outerWrapper}>
      <div style={iframeWrapper}>
        {!interactive && <div style={iframeShade}> </div>}
        <iframe
          tabIndex="-1"
          style={iframe}
          title="asdf"
          src={url}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default Thumbnail;
