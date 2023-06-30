import sum from "../utils/sum";

// Esse describe não será executado por conter o ".skip"
describe.skip("Esse describe não será executado", () => {
  test("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Esse describe por sua vez, será executado normalmente, pois não contém o ".skip"
describe("Esse describe será executado", () => {
  test("deve somar 2 + 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
