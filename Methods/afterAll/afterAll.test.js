import sum from "../../utils/sum";

afterAll(() => {
  console.log("Fui executado após todos os testes!");
});

describe("Método afterAll", () => {
  test("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
    console.log("Primeiro foi executado aqui.");
  });
});

describe("Método afterAll", () => {
  afterAll(() => {
    console.log("Fui executado após todos os testes e fim desse describe!");
  });
  test("deve somar 2 + 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

// Primeiro, o console do primeiro do describe é executado.
// Logo após, o segundo describe é executado e caso tenha um afterAll dentro dele, ele é executado.
// Por último é executado o afterAll que estiver do lado de fora de qualquer bloco describe.
