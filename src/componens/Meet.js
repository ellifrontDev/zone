import React from "react";
import meetImg from "../img/Rectangle 56.svg"
import {TfiSkype} from "react-icons/tfi"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"

const Meet = () => {
    return(
        <div className="container">
            <div id="meet">
                <div className="meet-logo">
                    <h1>Met Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>

                    <div className="meet-box">
                        <div className="meet-block">
                            <img src={meetImg} alt=""/>
                            <h3>Sunny Khan</h3>
                            <p>Executive officer</p>
                            <div className="meet-icons">
                                <h6><TfiSkype/></h6>
                                <h6><AiFillLinkedin/></h6>
                                <h6><AiFillTwitterCircle/></h6>
                                <h6><BsFacebook/></h6>
                            </div>

                            {/*<div className="meet-block">*/}
                            {/*    <img src={meetImg} alt=""/>*/}
                            {/*    <h3>Sunny Khan</h3>*/}
                            {/*    <p>Executive officer</p>*/}
                            {/*    <div className="meet-icons">*/}
                            {/*        <h6><TfiSkype/></h6>*/}
                            {/*        <h6><AiFillLinkedin/></h6>*/}
                            {/*        <h6><AiFillTwitterCircle/></h6>*/}
                            {/*        <h6><BsFacebook/></h6>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="meet-block">*/}
                            {/*    <img src={meetImg} alt=""/>*/}
                            {/*    <h3>Sunny Khan</h3>*/}
                            {/*    <p>Executive officer</p>*/}
                            {/*    <div className="meet-icons">*/}
                            {/*        <h6><TfiSkype/></h6>*/}
                            {/*        <h6><AiFillLinkedin/></h6>*/}
                            {/*        <h6><AiFillTwitterCircle/></h6>*/}
                            {/*        <h6><BsFacebook/></h6>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="meet-block">*/}
                            {/*    <img src={meetImg} alt=""/>*/}
                            {/*    <h3>Sunny Khan</h3>*/}
                            {/*    <p>Executive officer</p>*/}
                            {/*    <div className="meet-icons">*/}
                            {/*        <h6><TfiSkype/></h6>*/}
                            {/*        <h6><AiFillLinkedin/></h6>*/}
                            {/*        <h6><AiFillTwitterCircle/></h6>*/}
                            {/*        <h6><BsFacebook/></h6>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Meet;