import React from "react";
import careImg from "../img/man.svg"
import img2 from "../img/man-working.svg"

const Care = () => {
    return(
        <div className="container">
            <div id="care">
                <div className="care-logo">
                    <img src={careImg} alt=""/>

                    <div>
                        <h1>We complete every projects
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>
                    </div>
                </div>

                <div className="care-logo">
                    <div>
                        <h1>We complete every projects
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>
                    </div>
                    <img src={img2} alt=""/>
                </div>



            </div>
        </div>
    )
}
export default Care;