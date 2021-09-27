import React from "react";

import Thumbnail from "../src/Thumbnail";

export default {
  title: "Example/Thumbnail",
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  height: 500,
};
