import LinearFunction from '../LinearFunction';
import Point from './../Point';

describe("Проверка решения линейных функций", () => {
  test("(0,2) (1,5) => a=3, b=2", () => {
    var p1=new Point(0,2);
    var p2=new Point(1,5);
    expect(LinearFunction(p1, p2)).toEqual({ a: 3, b: 2 });
  });
});