import lcm from '../lcm';

describe("Проверка НОК", () => {
  test("Для  пары чисел 126 и 70 результат равен 630", () => {
    expect(lcm(126,70)).toEqual(630);
  });
  test("Для  пары чисел 68 и 34 результат равен 68", () => {
    expect(lcm(68, 34)).toEqual(68);
  });
});