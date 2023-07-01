import sum from "../utils/sum";

// Esse teste não será executado por conter o ".skip"
test.skip("deve somar 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// Por sua vez, esse teste será executado, pois não contém o ".skip"
test("deve somar 2 + 3", () => {
  expect(sum(2, 3)).toBe(5);
});
