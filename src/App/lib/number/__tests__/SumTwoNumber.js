import SumTwoNumber from './../SumTwoNumber';

describe("Сумма двух чисел", () => {
  test("2 3 => 5", () => {
    expect(SumTwoNumber('2 3')).toBe(5);
  });
  test("2 => null", function() {
    expect(SumTwoNumber('2')).toBeNull();
  });
});

