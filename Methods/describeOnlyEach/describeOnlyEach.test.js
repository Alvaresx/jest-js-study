import sum from "../../utils/sum";

// Esse describe é executado por contem o ".only"
describe.only.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
])("Esse describe será executado", (a, b, expected) => {
  test(`deve somar ${1} + ${b}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});

// Esse teste que não possui o ".only", não é executado
test("Esse teste não será executado", () => {
  expect(sum(4, 5)).toBe(9);
});
