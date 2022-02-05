import * as React from 'react'

function ArticleThumb({createdAt, title, body}) {
    return (
        <article>
            <h1>{title}</h1>
            <p>{createdAt}</p>
        </article>
    )
}

export default ArticleThumb;