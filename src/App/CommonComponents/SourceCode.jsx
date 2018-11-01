import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/prism";

class SourceCode extends PureComponent {
  render() {
    const { solution } = this.props;
    return (
      <section>
        <hr />
        <h3>Исходный код</h3>
        <SyntaxHighlighter language="javascript" style={docco}>
          {solution}
        </SyntaxHighlighter>
      </section>
    );
  }
}

export default SourceCode;
