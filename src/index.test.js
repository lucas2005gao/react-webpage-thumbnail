import React from "react";
import { mount } from "enzyme";
import Thumbnail from "./index";

it("should render an iframe in the Thumbnail", () => {
  const thumbnail = mount(<Thumbnail />);
  const thumbnailElements = thumbnail.find("iframe");

  expect(thumbnailElements.length).toBe(1);
});

it("should render a Thumbnail with styles", () => {
  const style = { boarderRadius: 10, height: 50, width: 50 };
  const thumbnail = mount(<Thumbnail style={style} />);
  expect(
    thumbnail.find({ "data-testid": "div-outer-wrapper" }).prop("style")
  ).toEqual(expect.objectContaining(style));
});

it("inline style prop should overwrite custom styles", () => {
  const style = { boarderRadius: 10, height: 50, width: 50 };
  const thumbnail = mount(<Thumbnail height={100} style={style} />);
  expect(
    thumbnail.find({ "data-testid": "div-outer-wrapper" }).prop("style")
  ).toEqual(expect.objectContaining(style));
});

// it("should render custom className if provided", () => {
//   const skeleton = mount(<Skeleton count={4} className="testClass" />);
//   expect(skeleton.find(skeletonSelector).at(0).hasClass("testClass")).toBe(
//     true
//   );
// });
