import React from "react";
import renderer from "react-test-renderer";
import Comment, { starGen } from "../../src/components/Comment";

it("matches the snapshot", () => {
  const review = {
    name: "Connan Mockasin",
    comment: "Amazing!",
    rating: 5
  };
  const tree = renderer.create(<Comment review={review} />);
  expect(tree).toMatchSnapshot();
});

test("star generation returns the right amount of stars", function() {
  const expected = "★★★☆☆";

  const result = starGen(3);

  expect(result).toBe(expected);
});
