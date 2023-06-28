import sum from "../utils/sum";

describe.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
])("Testando diversos valores para soma", (a, b, expected) => {
  it(`deve somar ${a} + ${b}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});

// Um array de arrays é passado com os valores desejados.
// A função do describe recebe como parâmetros esses valores, em sua respectiva ordem.
// Esses valores vindos por parâmetro são passados como variáveis para os testes.
// O ".each" faz com que os testes sejam repetidos.
