import React from "react";
import "./skeleton.css";

const Skeleton = ({ style }) => {
  return (
    <div style={{ ...style }} className="skeleton">
      <div className="thumbnail"></div>
    </div>
  );
};

export default Skeleton;
