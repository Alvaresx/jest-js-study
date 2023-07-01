test("deve rejeitar a promise com o erro `Um erro ocorreu`", async () => {
  await expect(Promise.reject(new Error("Um erro ocorreu"))).rejects.toThrow(
    "Um erro ocorreu"
  );
});
