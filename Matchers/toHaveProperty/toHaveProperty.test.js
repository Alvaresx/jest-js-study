const guardaRoupa = {
  calça: "azul",
  camiseta: "laranja",
  casaco: "preto",
};

test("deve conter a propriedade 'casaco' com o valor 'preto' e a propriedade 'camiseta'", () => {
  expect(guardaRoupa).toHaveProperty("casaco", "preto");
  expect(guardaRoupa).toHaveProperty("camiseta");
});
