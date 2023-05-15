import React from 'react'

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