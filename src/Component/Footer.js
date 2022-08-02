import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Css/FooterStyle.css';

const Footer= () => {
    return(
        <>
        <footer>
            <div className="container container-flex">
                <div className="icons">
                  <TwitterIcon className="icons" />
                  <FacebookIcon className="icons" />
                  <InstagramIcon className="icons" />
                  <LinkedInIcon className="icons"/>
                </div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className="copyright">
                    <p>All Rights Reserved &copy;</p>
                    
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;