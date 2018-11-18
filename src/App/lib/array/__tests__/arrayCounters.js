import arrayCounters from './../arrayCounters';

describe("Тестирование функции arrayCounters", () => {
  test("Массив [1, 2, 3, 2, 3, 1, 1, 1, 1, 3] (где максимально число: 3) даст массив [5, 2, 3]", function() {
    expect(arrayCounters([1, 2, 3, 2, 3, 1, 1, 1, 1, 3], 3)).toEqual([5, 2, 3]);
  });
});