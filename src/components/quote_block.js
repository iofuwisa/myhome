import * as React from 'react'

import "../styles/quote_block.scss"

function QuoteBlock({node, children, ...props}) {
    return <div className="quoteBlock">{children}</div>
}

export default QuoteBlock;