import React, { Fragment } from 'react';
import Slider from './Slider';
const About = () => {
    return ( 
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mt-85">
                        <div className="section-title">
                            <h3 className="title">رستوران ما</h3>
                            <div className="separator color-separator"></div>
                        </div>
                        <p className="title-p">
                        مشتریان گرامی ، اکنون ما برای سفارشات جمع آوری و تحویل باز هستیم.
                        </p>

                    </div>
                  <div className="col-md-6 mt-85">
                   <Slider/>
                </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default About;