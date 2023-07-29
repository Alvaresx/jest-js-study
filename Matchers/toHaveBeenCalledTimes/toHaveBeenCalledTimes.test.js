import getColors from "../../utils/getColor";

test("deve chamar a função de callback uma vez", () => {
  const getCorrectColorMock = jest.fn();
  getColors(getCorrectColorMock, "red");
  expect(getCorrectColorMock).toHaveBeenCalledTimes(1);
});
