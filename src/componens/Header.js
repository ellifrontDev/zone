import React from "react";
import headerImg from "../img/Logo.png"

const Header = () => {
    return(
        <div id="header">
            <div className="container">
                <div className="header-logo">
                        <img src={headerImg} alt=""/>

                    <div className="header-nav">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Service</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                    </div>
                    <button>Contact Us</button>
                </div>
            </div>

        </div>
    )
}
export default Header;