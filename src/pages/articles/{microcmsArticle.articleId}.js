import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Page from "../../components/page.js"
import SEO from "../../components/seo.js"
import CodeBlock from "../../components/code_block.js"
import QuoteBlock from "../../components/quote_block.js"

import "../../styles/article.scss"

const Article = ({ data: {microcmsArticle: {title, body, createdAt}}}) => {
    return (
        <>        
            <SEO title={title} og_type="article"/>
            <Page>
                <article className="article">
                    <h1>{title}</h1>
                    <p className="createdAt">{createdAt}</p>
                    <ReactMarkdown
                        children={body}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: "h2",
                            h2: "h3",
                            h3: "h4",
                            h4: "h5",
                            code: CodeBlock,
                            blockquote: QuoteBlock
                        }}
                    />
                </article>
            </Page>
        </>
    )
}

export default Article

export const query = graphql`
    query($id: String!) {
        microcmsArticle(id: {eq: $id}) {
            id
            createdAt(formatString: "YYYY-MM-DD")
            title
            body
        }
    }
`  