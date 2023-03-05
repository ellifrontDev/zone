import React from "react";
import serviceImg from "../img/Icon.svg"
import {BsArrowRight} from "react-icons/bs"

const Service = () => {
    return(
        <div className="container">
            <div id="service">
                <div className="service-logo">
                    <h1>Our Service </h1>
                    <p>We turn information into actionable insights We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>

             <div className="service-box">
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
                 <div className="service-block">
                     <img src={serviceImg} alt=""/>
                     <h3>Order Management</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/>
                         the adipiscing elit. Sed quis accumsan nisi <br/> Ut  felis congue nisl hendrerit commodo.</p>
                     <p>Learn more <BsArrowRight/></p>
                 </div>
             </div>

                </div>
            </div>
        </div>
    )
}
export default Service;