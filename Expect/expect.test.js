import sum from "../utils/sum";

test("deve somar 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// O valor do expect é o retorno da função sum, ele é comparado usando o matcher toBe().
