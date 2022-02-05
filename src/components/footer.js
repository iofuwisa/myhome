import * as React from 'react'
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaGithub, FaTwitter } from "react-icons/fa";

import "../styles/footer.scss"

function Footer() {
    return (
        <div className='footer'>
            <IconContext.Provider value={{ color: '#ccc', size: '70px'}}>
                <Link to="https:///github.com"><span className='icon'><FaGithub /></span></Link>
                <Link to="https://twitter.com"><span className='icon'><FaTwitter /></span></Link>
            </IconContext.Provider>
            <p>© <Link to="/">otsukajapan</Link> {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;