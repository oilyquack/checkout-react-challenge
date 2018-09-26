import React from "react";
import renderer from "react-test-renderer";
import Comments from "../../src/components/Comments";

it("matches the snapshot", () => {
  const reviews = [
    {
      name: "Connan Mockasin",
      comment: "Amazing!",
      rating: 5
    },
    {
      name: "Regina Spektor",
      comment: "Rubbish!",
      rating: 1
    }
  ];
  const tree = renderer.create(<Comments reviews={reviews} />);
  expect(tree).toMatchSnapshot();
});
