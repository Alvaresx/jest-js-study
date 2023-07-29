import getColors from "../../utils/getColor";

test("deve chamar a função de callback", () => {
  const getCorrectColorMock = jest.fn();
  getColors(getCorrectColorMock, "red");
  expect(getCorrectColorMock).toHaveBeenCalled();
});

// A função de callback foi mockada e passada como parâmetro esperado na função getColors
// Logo após, chamamos a função getColors e verificamos se o callback foi chamado
