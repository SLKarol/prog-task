import delayText from "./../delayText";

describe("Простой promise", () => {
  test("1 секунда прошла", async () => {
    return delayText(1000, "1 секунда прошла").then(re => {
      expect(re).toBe("1 секунда прошла");
    });
  });
});
