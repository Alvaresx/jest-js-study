import sum from "../../utils/sum";

describe("Esse é o nome do meu describe", () => {
  // Pode receber diretamente os testes
  it("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Esse é o nome do meu describe", () => {
  // Ou pode ter outros describes aninhados
  describe("Esse é um describe que está aninhado", () => {
    it("deve somar 1 + 2", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
