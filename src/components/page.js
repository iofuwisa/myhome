import * as React from 'react'

import Footer from "./footer.js"

import "../styles/page.scss"

function Page({children}) {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Page;