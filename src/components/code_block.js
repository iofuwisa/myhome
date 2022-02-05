import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import "../styles/code_block.scss"

function CodeBlock({node, inline, className, children, ...props}) {
  const match = /language-(\w+)(:.+)*/.exec(className || '');
  const lang = match && match[1] ? match[1] : '';
  const name = match && match[2] ? match[2].slice(1) : '';
  children = String(children).replace(/\n$/, '');
  if (name != "") {
    children = "\n" + String(children).replace(/\n$/, '');
  }
  return (!inline && match ? (
    <div class="codeBlockWrapper">
      {name != "" ? <div class="codeBlockTitle">{name}</div> : null}
      <SyntaxHighlighter
        children={children}
        style={base16AteliersulphurpoolLight}
        language={lang}
        PreTag="div"
        {...props}
      />
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  ))
}

export default CodeBlock;