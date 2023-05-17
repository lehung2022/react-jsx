import React from 'react'
import './index.css';

const Footer = () => {
    const today = new Date();

    return (
        <footer>
            <h4>
                copyright &copy; {today.getFullYear()}
            </h4>
        </footer>
    )
}

export default Footer;