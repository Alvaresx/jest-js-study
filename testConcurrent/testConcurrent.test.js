import sum from "../utils/sum";

test.concurrent("deve somar 1 + 2", async () => {
  expect(sum(1, 2)).toBe(3);
});

test.concurrent("deve somar 2 + 3", async () => {
  expect(sum(2, 3)).toBe(5);
});
