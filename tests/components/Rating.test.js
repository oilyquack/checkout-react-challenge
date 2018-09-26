import React from "react";
import renderer from "react-test-renderer";
import Rating from "../../src/components/Rating";

it("matches the snapshot", () => {
  const tree = renderer.create(<Rating />);
  expect(tree).toMatchSnapshot();
});
