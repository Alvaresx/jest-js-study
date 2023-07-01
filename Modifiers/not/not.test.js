import sum from "../../utils/sum";

test("deve garantir que a soma de 1 + 2 não é 4", () => {
  expect(sum(1, 2)).not.toBe(4);
});
