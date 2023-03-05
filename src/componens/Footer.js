import React from "react";
import footerImg from "../img/Logo.png"
import {CiLocationOn} from "react-icons/ci"
import {FiPhoneCall} from "react-icons/fi"
import {TbMessage2} from "react-icons/tb"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"

const Footer = () => {
    return(
        <div className="container ">
        <div id="footer">
            <div className="footer">
                <div className="footer-logo">
                    <div>
                        <img src={footerImg} alt=""/>
                        <div className="icons">
                            <h3><CiLocationOn/></h3>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className="icons">
                            <h3><FiPhoneCall/></h3>
                            <p>0943833399</p>
                        </div>
                        <div className="icons">
                            <h3><TbMessage2/></h3>
                            <p>support@zone.com</p>
                        </div>

                        <div className="footer-icons">
                            <h4><BsFacebook/></h4>
                            <h4><AiFillTwitterCircle/></h4>
                            <h4><AiOutlineInstagram/></h4>
                            <h4><BsPinterest/></h4>
                        </div>
                    </div>

                    <div className="footer-title">
                        <h4>Service <br/>
                            Order Management <br/>
                            Social Assistant<br/>
                            Crypto Platform<br/>
                            Analyzer of the News</h4>
                    </div>
                    <div className="footer-title">
                        <h4>Company <br/>
                            About Us<br/>
                            News<br/>
                            Our trusted partner<br/>
                            New users FAQ</h4>
                    </div>
                    <div className="footer-title">
                        <h4>Supports <br/>
                            Help center<br/>
                            Feedbcak<br/>
                            Contact us<br/>
                            Terms conditins</h4>
                    </div>
                    <div className="footer-title">
                        <h4>Resources <br/>
                            Download app<br/>
                            Blog<br/>
                            What’s new<br/>
                            Sitemap</h4>
                    </div>

                    </div>
            </div>
        </div>
        </div>
    )
}
export default Footer;