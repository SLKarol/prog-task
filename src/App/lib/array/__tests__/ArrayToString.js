import ArrayToString from './../ArrayToString';

describe("Тестирование функции обращения массива в строку", () => {
  test("Массив [] => '[]'", () => {
    expect(ArrayToString([])).toEqual('[]');
  });
  test("Массив [1,2,3] => '[1,2,3]'", function() {
    expect(ArrayToString([1,2,3])).toEqual('[1, 2, 3]');
  });
  test("Массив [{home: 1, street: 'Мира'}, {home: 2, street: 'Мира'}, {home: 3, street: 'Мира'}] => строка", function() {
    expect(ArrayToString([{home: 1, street: 'Мира'}, {home: 2, street: 'Мира'}, {home: 3, street: 'Мира'}]))
      .toEqual("[{home: 1, street: 'Мира'}, {home: 2, street: 'Мира'}, {home: 3, street: 'Мира'}]");
  });  
});
