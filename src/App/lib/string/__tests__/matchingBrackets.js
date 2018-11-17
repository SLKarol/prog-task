import matchingBrackets from './../matchingBrackets';

describe("Проверка корректности скобок", () => {
  it("(a+[b*c] - {d/3}) корректно", function() {
    expect(matchingBrackets("(a+[b*c] - {d/3})")).toBeTruthy();
  });
  it("(a+[b*c) - 17]", function() {
    expect(matchingBrackets("(a+[b*c) - 17]")).not.toBeTruthy();
  });
});