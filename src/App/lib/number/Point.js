const Point = function () {
  // Получил два числа
  if (arguments.length === 2) {
    this.x = arguments[0];
    this.y = arguments[1];
  }
  // Получил строку
  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    let value = arguments[0];
    if (value[0] === '(') {
      value = value.replace('(', '').replace(')', '').split(',');
    }
    this.x = value[0] * 1;
    this.y = value[1] * 1;
  }
}
export default Point;