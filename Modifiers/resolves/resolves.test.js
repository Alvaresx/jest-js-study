test("deve retornar o valor 3 da promise", async () => {
  await expect(Promise.resolve(3)).resolves.toBe(3);
});
