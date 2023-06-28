import sum from "../utils/sum";

beforeEach(() => {
  console.log("Fui executado aqui primeiro!");
});

describe("Método beforeEach", () => {
  beforeEach(() => {
    console.log("Logo após fui executado aqui no describe!");
  });

  it("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("deve somar 2 + 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

// O beforeEach a ser chamado primeiro é o que está do lado de fora.
// Logo após, o beforeAll que está dentro de um bloco describe é chamado.
// Ambos são chamados antes de cada teste ser executado, sendo que primeiro chama o do
// lado de fora, e depois o do lado de dentro.
