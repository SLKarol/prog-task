import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

class SourceCode extends PureComponent {
  render() {//docco tomorrow solarizedlight
    const { solution } = this.props;
    return (
      <section>
        <hr />
        <h3>Исходный код</h3>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {solution}
        </SyntaxHighlighter>
      </section>
    );
  }
}

export default SourceCode;
