import * as React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Page from "../components/page.js"
import SEO from "../components/seo.js"
import ArticleThumb from '../components/article_thumb'

import "../styles/index.scss"

const IndexPage = ({data: {allMicrocmsArticle: {nodes}}}) => {
  nodes.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
  nodes.map((article) => {
    article.createdAt = article.createdAt.substr(0, 10);
  })
  return (
    <>
      <SEO title="otsukajapan" og_type="website"/>
      <Page>
        {nodes.map((article, index) => {
          return <Link to={"/articles/" + article.articleId} key={index}>
              {index != 0 ? <hr className='thumbDivider'/> : null}
              <ArticleThumb
                title={article.title}
                body={article.bosy}
                createdAt={article.createdAt}
              />
            </Link>
        })}
      </Page>
    </>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMicrocmsArticle {
    nodes {
      id
      title
      articleId
      createdAt(formatString: "YYYY-MM-DD HH:mm:ss.SSS")
      body
    }
  }
}
`