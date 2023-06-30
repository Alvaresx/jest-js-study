import sum from "../utils/sum";

// Esse describe não será executado por conter um ".skip"
describe.skip.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
])("Esse describe não será executado", (a, b, expected) => {
  test(`deve somar ${a} + ${b}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
