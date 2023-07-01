import sum from "../../utils/sum";

// Por conter o ".failing", mesmo estando falho, o teste passará
test.failing("Esse teste tem o expect falho, mas irá passar", () => {
  expect(sum(1, 2)).toBe(4);
});

// Esse por sua vez, está correto, mas por conter o ".failing", falhará
test.failing("Esse teste está correto, mas não passará", () => {
  expect(sum(1, 2)).toBe(3);
});
