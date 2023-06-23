function sum(a, b) {
  return a + b;
}

afterEach(() => {
  console.log("Fui executado aqui após o teste do describe ser executado!");
});

describe("Método afterEach", () => {
  afterEach(() => {
    console.log("Fui executado aqui primeiro após cada teste ser executado nesse describe!");
  });
  it("deve somar 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("deve somar 2 + 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

// O primeiro teste é executado e o console de dentro do describe é chamado.
// Após isso, o console do lado de fora é chamado.

// Para resumir, a cada teste executado, o afterEach é chamado, sendo que
// o do describe é sempre chamado primeiro.
