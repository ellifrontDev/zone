import React from "react";
import heroImg from "../img/sal.svg"
import {AiOutlinePlayCircle} from "react-icons/ai"

const Hero = () => {
    return(
        <div className="container">
            <div id="hero">
                <div className="hero-logo">
                        <div>
                            <h1>Virtual Reality <br/> Business Solutions</h1>
                            <p>We have over 15 year exprience in business consultting arena. We have over <br/> 15 year exprience in business consultting arena and artficial intelligence.
                            </p>

                            <div className="hero-box">
                                <button>Join Us</button>
                                <h1><AiOutlinePlayCircle/></h1>
                                <h4>Watch video</h4>
                            </div>

                        </div>
                            {/*<img src={heroImg}  alt=""/>*/}
                    </div>
            </div>
        </div>
    )
}
export default Hero;