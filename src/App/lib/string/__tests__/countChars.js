import countChars from './../countChars';

describe("Колиство символов в строке", () => {
  var testObject;
  var teststring = "aasdsdfda";
  beforeAll(function() {
    testObject = countChars(teststring);
  });

  it("Слово 'aasdsdfda', результат: { a: 3, s: 2, d: 3, f: 1 }", function() {
    expect(testObject).toEqual({ a: 3, s: 2, d: 3, f: 1 });
  });
  it("В качестве ключа присутствует первая буква", function() {
    expect(Object.keys(testObject)).toContain(teststring[0]);
  });
  it("В качестве ключа присутствует последняя буква", function() {
    expect(Object.keys(testObject)).toContain(
      teststring[teststring.length - 1]
    );
  });
  it("Ключ 'а' должен содержать число 3", function() {
    expect(testObject["a"]).toEqual(3);
  });
});

