import React from "react";
import Comment from "../../src/components/Comment";
import renderer from "react-test-renderer";

const { starGen } = require("../../src/components/Comment");

describe("Comment", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Comment />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("star generation returns the right amount of stars", function() {
  const expected = "★★★☆☆";

  const result = starGen(3);

  expect(result).toBe(expected);
});
