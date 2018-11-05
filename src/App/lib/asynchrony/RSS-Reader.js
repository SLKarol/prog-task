import "whatwg-fetch";
import TextToXML from "./../xml/TextToXML";

async function RSS_Reader(url, UseProxyCORS = false) {
  const urlRSS =
    (UseProxyCORS ? "https://cors-anywhere.herokuapp.com/" : "") + url;
  try {
    // Получить ответ от сервера
    const response = await fetch(urlRSS)
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Не удалось получить ответ от сервера.");
        }
      })
      .catch(error => {
        return { error };
      });
    const { error } = response;
    if (error) {
      return { error };
    }
    // Преобразовать ответ в XML
    const responseXML = TextToXML(response);
    // Сформировать ответ
    let re = {};
    re.title = responseXML.querySelector("title").innerHTML;
    // .toLocaleString()
    re.pubDate = new Date(
      responseXML.querySelector("pubDate").innerHTML.trim()
    );
    const items = Array.prototype.slice.call(
      responseXML.querySelectorAll("item"),
      0
    );
    re.items = items.map(tmpXML => {
      const author = tmpXML.querySelector("author");
      return {
        title: tmpXML.querySelector("title").innerHTML.trim(),
        author: author ? author.innerHTML.trim() : null,
        pubDate: new Date(tmpXML.querySelector("pubDate").innerHTML.trim()),
        description: tmpXML.querySelector("description").innerHTML.trim()
      };
    });
    return re;
  } catch (error) {
    return { error };
  }
}
export default RSS_Reader;
