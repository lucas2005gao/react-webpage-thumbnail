import React from "react";

const iframestyle = {
  transform: "scale(0.15)",
  transformOrigin: "0 0",
  width: "1500px",
  height: "1000px",
  border: "0px",
};

function Thumbnail({
  url,
  iframeWidth,
  iframeHeight,
  width,
  height,
  interactive,
}) {
  return (
    <div style={{ maxWidth: "300px", maxHeight: "160px" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          maxHeight: "160px",
          zIndex: "10",
        }}
      >
        a
      </div>
      <iframe
        tabIndex="-1"
        style={iframestyle}
        title="asdf"
        src="http://localhost:3000/play/61483f36cfda1304e0d16b0e"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
      />
    </div>
  );
}

export default Thumbnail;
