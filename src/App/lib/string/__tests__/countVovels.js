import countVovels from './../countVovels';
var testObject;
var teststring = "тестовая строка";

var noVovelsObject;
var noVovels='стрк';

beforeAll(() => {
  testObject = countVovels(teststring);
  noVovelsObject = countVovels(noVovels);
});

describe("Тестирование функции количества гласных букв", () => {
  test("Строка 'тестовая строка', результат не содержит letter='б'", () => {
    expect(testObject.find(q=>q.letter==='б')).toBe(undefined)
  });
  test("Строка 'тестовая строка', результат содержит {letter='а', count=2}", function() {
    expect(testObject.find(q=>q.letter==='а')).toEqual({letter:'а', count:2});
  });
  test("Строка 'тестовая строка', результат содержит {letter='е'...}", function() {
    expect(testObject.find(q=>q.letter==='е')).not.toBe(undefined);
  });
  test("Строка 'Анна', результат равен [{letter='а', count=2}]", function() {
    expect(countVovels('Анна')).toEqual([{letter:'а', count:2}]);
  });
  test("Строка 'стрк', результат: []", function() {
    expect(noVovelsObject).toEqual([]);
  });
  test("Строка 'тестовая строка', результат : [{letter: 'а', count: 2}, {letter: 'е', count: 1}, {letter: 'о', count: 2}, {letter: 'я', count: 1}]", function() {
    expect(testObject).toEqual([{letter: 'а', count: 2}, {letter: 'е', count: 1}, {letter: 'о', count: 2}, {letter: 'я', count: 1}]);
  });
});
