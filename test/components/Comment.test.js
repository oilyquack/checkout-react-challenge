const { starGen } = require("../../src/components/Comment");

test("star generation", function() {
  const expected = `
  <span class="star" id="1">★</span>
  <span class="star" id="2">★</span>
  <span class="star" id="3">★</span>
  <span class="star" id="4">☆</span>
  <span class="star" id="5">☆</span>
  `;

  const result = starGen(3);

  expect(result).toBe(expected);
});
