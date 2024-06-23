import './footer.scss';
import React from "react";
import twitter from "../../img/twitter.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"

function Footer({items, logo}) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-content">
                        <div className="footer-content__menu">
                            {items.map(item =>
                                <li className="footer-content__menu-item">
                                    <a href="#">{item.value}</a>
                                </li>
                            )}
                        </div>
                        <div className="footer-content__logo">
                            {logo}
                        </div>
                        <div className="footer-content__contacts">
                            <div className="footer-content__contacts-email">
                                <a href="#"> blogger@post.com</a>
                            </div>
                            <div className="footer-content__contacts-number">
                                <a href="#"> +345 645 375 2010</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-links">
                            <h4>Social:</h4>
                            <div className="footer-social-links__twitter">
                                <a href="#">
                                     <img src={twitter} width="20px" height="20px"/>
                                </a>
                            </div>
                            <div className="footer-social-links__facebook">
                                <a href="#">
                                    <img src={facebook} width="20px" height="20px"/>
                                </a>
                            </div>
                            <div className="footer-social-links__instagram">
                                <a href="#">
                                    <img src={instagram} width="20px" height="20px"/>
                                </a>
                            </div>
                        </div>
                        <div className="footer-social-info">
                            <div className="footer-social-info__inner">
                                <p>Copyright © 2023 Blogger</p>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-design">
                        <p>Nazarii Karpa's own design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
