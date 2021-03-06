import gcd from '../gcd';

describe("Проверка НОД", () => {
  test("Для  пары чисел 20 и 15 результат равен 5", () => {
    expect(gcd(20,15)).toEqual(5);
  });
  test("Для  пары чисел 15 и 20 результат равен 5", () => {
    expect(gcd(15, 20)).toEqual(5);
  });
  test("Для  пары чисел 2 и 19 результат равен 1", () => {
    expect(gcd(2, 19)).toEqual(1);
  });
});