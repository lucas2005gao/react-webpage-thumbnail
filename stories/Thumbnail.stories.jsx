import React from "react";

import Thumbnail from "../src/Thumbnail";

export default {
  title: "Example/Thumbnail",
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

// export const defaultThumbnail = Template.bind({});

export const sizeDefinedThumbnail = Template.bind({});
sizeDefinedThumbnail.args = {
  width: 400,
  height: 300,
};

export const iframeNotAllowedThumbnail = Template.bind({});
iframeNotAllowedThumbnail.args = {
  url: "https://www.google.com/",
  width: 400,
  height: 300,
};

// export const fitThumbnailInContainer = () => {
//   return (
//     <div style={{ width: 500, height: 400, background: "blue" }}>
//       {Template.bind({})()}
//     </div>
//   );
// };

// export const fitSmallerThumbnailInContainer = () => {
//   const thumbnail = Template.bind({});
//   thumbnail.args = {
//     url: "https://www.google.com/",
//     width: 400,
//     height: 300,
//   };
//   return (
//     <div style={{ width: 500, height: 400, background: "blue" }}>
//       {thumbnail()}
//     </div>
//   );
// };
