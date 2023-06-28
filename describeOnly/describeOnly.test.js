import sum from "../utils/sum";

// Esse bloco describe será executado por ter o ".only".
describe.only("Esse describe será executado", () => {
  it("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Por consequência, os blocos describe que não tiverem ".only", serão pulados.
describe("Esse por sua vez, não será executado", () => {
  it("deve somar 2 + 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
