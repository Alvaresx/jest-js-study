import getColors from "../../utils/getColor";

test("deve chamar a função com o parâmetro 'red'", () => {
  const getCorrectColorMock = jest.fn();
  getColors(getCorrectColorMock, "red");
  expect(getCorrectColorMock).toHaveBeenCalledWith("red");
});
