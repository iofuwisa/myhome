import React from "react"
import { Helmet } from "react-helmet"

import FaviconImg from "../images/favicon.svg"

const SEO = ({title, og_type}) => {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-jp"}}
            title={title}
            titleTemplate={`%s`}
            meta={[
                // {
                //     name: `description`,
                //     content: description,
                // },
                {
                    name: `og:title`,
                    content: title,
                },
                // {
                //     name: `og:description`,
                //     content: description,
                // },
                {
                    name: `og:type`,
                    content: og_type,
                },
                // {
                //     name: `og:image`,
                //     content: LogoImg,
                // },
                {
                    name: `og:site_name`,
                    content: `ohtsukajapan's blog`,
                },
                {
                    name: `og:locale`,
                    content: `ja_JP`,
                },
            ]}
            >   

            <link rel="icon" href={FaviconImg} />
        </Helmet>
    )
}

export default SEO