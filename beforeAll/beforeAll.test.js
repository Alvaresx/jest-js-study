import sum from "../utils/sum";

beforeAll(() => {
  console.log("Fui chamado antes de qualquer teste ser executado!");
});

describe("Método beforeAll", () => {
  beforeAll(() => {
    console.log("Fui chamado aqui no describe primeiro, antes de qualquer teste ser executado!");
  });

  it("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
    console.log("Fui chamado após os beforeAll serem executados!");
  });
});

// O beforeAll do lado de fora é executado primeiro.
// Logo após, o beforeAll que está dentro do describe é executado.
// Por fim, os testes são executados e o console do teste é chamado.
