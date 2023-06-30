import sum from "../utils/sum";

test.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
])("deve somar %i + %i", (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});

// O valor %i representa um número inteiro do array, e automaticamente
// ele identificada sua respectiva ordem. Esse tipo de formatação é com
// printf.
