import IsPalindrome from './../IsPalindrome';

describe("Тестирование палиндромов", () => {
  test("'Аргентина манит негра' палиндром", () => {
    expect(IsPalindrome('Аргентина манит негра')).toBe(true);
  });
  test("'А роза упала на лапу Азора' палиндром", function() {
    expect(IsPalindrome('А роза упала на лапу Азора')).toBe(true);
  });
  test("'Тест работает' не палиндром", function() {
    expect(IsPalindrome('Тест работает')).not.toBe(true);
  });
});
