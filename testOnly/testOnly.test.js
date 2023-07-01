import sum from "../utils/sum";

// Esse teste será executado por contem o ".only"
test.only("deve somar 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// Esse teste não será executado, pois não possui o ".only"
test("deve somar 2 + 3", () => {
  expect(sum(2, 3)).toBe(5);
});
