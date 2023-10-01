import Thumbnail from "./index";
import { render, screen } from "@testing-library/react";

import React from "react";

it("should render an iframe in the Thumbnail", () => {
  render(<Thumbnail />);
  const thumbnailElements = screen.getAllByRole("iframe");

  expect(thumbnailElements.length).toBe(1);
});

it("should render a Thumbnail with styles", () => {
  render(
    <Thumbnail
      style={{ boarderRadius: "10px", height: "50px", width: "50px" }}
    />
  );
  const thumbnail = screen.getByTestId("div-outer-wrapper");
  expect(thumbnail.style.boarderRadius).toEqual("10px");
  expect(thumbnail.style.height).toEqual("50px");
  expect(thumbnail.style.width).toEqual("50px");
});

it("inline style prop should overwrite custom styles", () => {
  const style = { boarderRadius: 10, height: 50, width: 50 };
  render(<Thumbnail height={100} style={style} />);
  const thumbnail = screen.getByTestId("div-outer-wrapper");
  expect(thumbnail.style.boarderRadius).toEqual("10px");
  expect(thumbnail.style.height).toEqual("50px");
  expect(thumbnail.style.width).toEqual("50px");
});

// it("should render custom className if provided", () => {
//   const skeleton = mount(<Skeleton count={4} className="testClass" />);
//   expect(skeleton.find(skeletonSelector).at(0).hasClass("testClass")).toBe(
//     true
//   );
// });
