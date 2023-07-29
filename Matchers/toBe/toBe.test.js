import sum from "../../utils/sum";

test("deve somar 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// O toBe irá conferir se o valor da soma entre 1 e 2 será 3
