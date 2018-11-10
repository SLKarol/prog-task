import Point from './Point';

function LinearFunction(point1, point2) {
  // Умножить первую пару чисел на -1
  const p11 = new Point(-1 * point1.x, -1 * point1.y);
  /* Cкладывая два уравнения, избавимся от b,
  приведя к уравнению с одной неизвестной:
  y=x*a
  */
  const a = (p11.y + point2.y) / (p11.x + point2.x);
  const b = point1.y - a * point1.x;
  return {
    a,
    b
  };
}
export default LinearFunction;