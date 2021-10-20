import React from "react";

import Thumbnail from "../src/Thumbnail";

export default {
  title: "Example/Thumbnail",
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;
const TemplateWithWrapper = (args) => (
  <div style={{ width: 500, height: 400, background: "lightblue" }}>
    <Thumbnail {...args} />
  </div>
);

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

export const fitThumbnailInContainer = TemplateWithWrapper.bind({});
fitThumbnailInContainer.args = {};

export const fitSmallerThumbnailInContainer = TemplateWithWrapper.bind({});
fitSmallerThumbnailInContainer.args = { width: 400, height: 300 };
