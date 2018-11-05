import ExistTriangle from "./../ExistTriangle";

describe("Проверка cуществования треугольника по трём сторонам", () => {
  test("3,4,5", () => {
    expect(ExistTriangle(3, 4, 5)).toBeTruthy();
  });
  test("1,2,4", function() {
    expect(ExistTriangle(1, 2, 4)).not.toBeTruthy();
  });
});
