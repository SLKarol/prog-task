import React, { PureComponent } from "react";

class IndexInfo extends PureComponent {
  render() {
    return (
      <article>
        <h1>Задачи по программированию</h1>
        Здесь представлены мои решения задач по программированию. Какие-то из
        них сложные, какие-то лёгкие. Причём здесь нет принципа{" "}
        <cite>от простого к сложному</cite> - примеры создаю непредсказуемо.
        <em>Все</em> задачи я буду решать по возможности использую используя
        только &quot;чистый&quot; <strong>JavaScript</strong>.
      </article>
    );
  }
}
export default IndexInfo;
