import RSS_Reader from "./../RSS-Reader";

describe("Чтение RSS", () => {
  test("ЛОР отвечает", async () => {
    const data = await RSS_Reader(
      "https://www.linux.org.ru/section-rss.jsp?section=1",
      true
    );
    expect(data).toHaveProperty("title", "Linux.org.ru: Новости");
    expect(data).toHaveProperty("items");
  });
});
