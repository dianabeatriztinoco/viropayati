import React from 'react';
import './footer.css'

const Footer = () => {
    const gitHubIcon = 'https://i.imgur.com/FQ0rLi8.png'
    const linkedin = 'data:image/png;base64,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'
    return (
        <>
        <div className="footer__container">
            <div>
            <a className="gitHub" href="https://github.com/dianabeatriztinoco" target="_blank"> 
            <img className="gitHubIcon" src={gitHubIcon} />
            </a>
            </div>
            <div>
            <a className="linkden" href='www.linkedin.com/in/dianabeatriztinoco' target='blank'>
            <img className="gitHubIcon" src={linkedin} />
            </a>
            </div>
            
          
        </div>
        
        </>
    )

}

export default Footer 