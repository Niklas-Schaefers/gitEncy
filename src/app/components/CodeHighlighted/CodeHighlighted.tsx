import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeHighlightedProps = {
  code: string;
};

function CodeHighlighted({ code }: CodeHighlightedProps): JSX.Element {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
}
export default CodeHighlighted;
