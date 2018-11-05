import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import RSS_Reader from "./../lib/asynchrony/RSS-Reader";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

function RSSItem(props) {
  const { description, author } = props;
  const textRSS = description
    .replace("<![CDATA[", "")
    .replace("]]>", "")
    .trim();
  const authorText = author ? "Автор: " + author + ", " : null;
  return (
    <article>
      <strong>{props.title}</strong>
      <br />
      <small>
        {authorText} Опубликовано: {props.pubDate.toLocaleString()}
      </small>
      <br />
      <article dangerouslySetInnerHTML={{ __html: textRSS }} />
    </article>
  );
}
function RSSList(props) {
  return (
    <ul>
      {props.items.map((i, index) => {
        let k = i.author + i.pubDate.toString() + index;
        return (
          <li key={k}>
            <RSSItem {...i} />
          </li>
        );
      })}
    </ul>
  );
}
function RSSContent(props) {
  const { rssContent } = props;
  if (Object.keys(rssContent).length === 0) return null;
  const { title, pubDate, items } = rssContent;
  let re = (
    <div>
      <h3>
        {pubDate.toLocaleString()} {title}
      </h3>
      <RSSList items={items} />
    </div>
  );
  return re;
}
function ErrorMessage(props) {
  return <div className="error">{props.error}</div>;
}

class RSSReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      useProxy: false,
      result: {},
      netWorking: false,
      rssContent: {}
    };
  }
  handlerChangeSource = event => {
    this.setState({ url: event.target.value });
  };
  handlerUseProxy = event => {
    this.setState({ useProxy: true });
  };
  handlerClickRead = _ => {
    const { url, useProxy } = this.state;
    if (url) {
      this.setState({ netWorking: true, rssContent: {} }, _ => {
        let re = RSS_Reader(url, useProxy);
        re.then(
          rssContent => {
            if (Object.keys(rssContent).find(q => q === "error")) {
              this.setState({
                netWorking: false,
                rssContent: { error: rssContent.error.message }
              });
            } else {
              this.setState({ netWorking: false, rssContent });
            }
          },
          error => this.setState({ netWorking: false, rssContent: {} })
        );
      });
    } else {
      this.setState({ rssContent: { error: "Не введен адрес" } });
    }
  };
  handlerFavoriteRSS = url => {
    this.setState({ url }, _ => this.handlerClickRead());
  };
  render() {
    const { location } = this.props;
    const { url, useProxy, netWorking, rssContent } = this.state;
    const { error } = rssContent;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Чтение RSS-ленты</h3>
          Простая &quot;читалка&quot; rss-ленты.
          <br />
          <strong>Внимание!</strong>
          <br />
          Встречается на сайтах защита от кросс-браузерного запроса. Для обхода
          оного запрета можно будет использовать прокси
          https://cors-anywhere.herokuapp.com/ . Именно этот прокси Вы можете
          подключить в запрос.
          <div>
            Некоторые <em>rss-ленты</em>
            <ul>
              <li>
                https://ithappens.me/rss
                <input
                  type="button"
                  value="Загрузить"
                  className="orange-button"
                  onClick={() =>
                    this.handlerFavoriteRSS("https://ithappens.me/rss")
                  }
                  disabled={netWorking}
                />
              </li>
              <li>
                https://www.linux.org.ru/section-rss.jsp?section=1
                <input
                  type="button"
                  value="Загрузить"
                  className="orange-button"
                  onClick={() =>
                    this.handlerFavoriteRSS(
                      "https://www.linux.org.ru/section-rss.jsp?section=1"
                    )
                  }
                  disabled={netWorking}
                />
              </li>
            </ul>
          </div>
          <div className="subform">
            <p>
              <label className="label">Адрес ленты</label>
              <input
                type="text"
                name="source-string"
                value={url}
                onChange={this.handlerChangeSource}
              />
            </p>
            <p>
              <label className="label">
                Использовать прокси для обхода CORS?
              </label>
              <input
                type="checkbox"
                name="email"
                id="email"
                checked={useProxy}
                onChange={this.handlerUseProxy}
              />
            </p>
            <p>
              <label className="label" />
              <input
                type="button"
                value={netWorking ? "Загрузка" : "Загрузить"}
                className="yellow-button"
                onClick={this.handlerClickRead}
                disabled={netWorking}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            {error ? (
              <ErrorMessage error={error} />
            ) : (
              <RSSContent rssContent={rssContent} />
            )}
          </div>
          <SourceCode
            solution={`async function RSS_Reader(url, UseProxyCORS = false) {
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
  }`}
          />
        </div>
      </div>
    );
  }
}
export default RSSReader;
