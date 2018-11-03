import ObjectToString from './../ObjectToString';

test("Объект в строку", () => {
  expect(ObjectToString({
    home: 1,
    street: 'Мира'
  })).toEqual("{home: 1, street: 'Мира'}");
});