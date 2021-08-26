import React from 'react';
import './footer.css'

const Footer = () => {
    const gitHubIcon = 'https://i.imgur.com/FQ0rLi8.png'
    return (
        <>
        <div className="footer__container">
            <a className="gitHub" href="https://github.com/dianabeatriztinoco">
            <img className="gitHubIcon" src={gitHubIcon} />
          </a>
        </div>
        </>
    )

}

export default Footer 