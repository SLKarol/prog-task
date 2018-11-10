import Point from './../Point';

describe("Использование Point", () => {
  var testUseNumbers;
  var useStringWithParentheses;
  var useStringWithoutParentheses;
  beforeAll(function () {
    testUseNumbers = new Point(2, 9);
    useStringWithParentheses = new Point('(2,9)');
    useStringWithoutParentheses = new Point('2,9');
  });
  test("Задать точку так: new Point(2,9); проверка x", () => {
    expect(testUseNumbers).toHaveProperty('x', 2);
  });
  test("Задать точку так: new Point(2,9); проверка y", () => {
    expect(testUseNumbers).toHaveProperty('y', 9);
  });
  test("Задать точку так: new Point('(2,9)'); проверка x", () => {
    expect(useStringWithParentheses).toHaveProperty('x', 2);
  });
  test("Задать точку так: new Point('2,9'); проверка x", () => {
    expect(useStringWithoutParentheses).toHaveProperty('x', 2);
  });
  test("Задать точку так: new Point('2, 9'); проверка x", () => {
    useStringWithoutParentheses = new Point('(2, 9)');
    expect(useStringWithoutParentheses).toHaveProperty('x', 2);
  });
});
