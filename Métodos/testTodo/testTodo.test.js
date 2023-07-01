import sum from "../../utils/sum";

test("deve somar 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// Esse teste aparecerá no final inicando que deverá ser criado
test.todo("escrever teste que deve somar 2 + 3");

test("deve somar 3 + 4", () => {
  expect(sum(3, 4)).toBe(7);
});
