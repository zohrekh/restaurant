import React, { Fragment } from 'react';

const Footer = () => {
    return ( 
    <Fragment>
        <footer>
            <div className="footer-inner mt-85">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-info">
                                <h4>لینک های ضروری</h4>
                                <div>
                                    <ul className="footer-ul">
                                        <li><a href="index.html">خانه</a></li>
                                        <li><a href="menu.html">منو</a></li>
                                        <li><a href="gallery.html">گالری</a></li>
                                        <li><a href="about.html">درباره ما</a></li>
                                        <li><a href="contact.html">تماس با ما</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                           
                            <div className="col-md-4">
                                <div className="footer-social">
                                    <h3>تماس با ما</h3>
                                    <ul>
                                        <li><a href="" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fa fa-telegram"></i></a></li>

                                    </ul>
                                    <div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-info">
                                    <h4>درباره ما</h4>
                                    <p className="title-p">
                                    مشتریان گرامی ، اکنون ما برای سفارشات جمع آوری و تحویل باز هستیم.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <ul className="footer-contacts">
                                <li><a href="tel:01733555167‏">تماس: 01733555167‏</a></li>
                                <li> آدرس: New Rd, Peterborough PE1 1FW</li>
                                <li>Email: info@turkishkitchenpeterborough.co.uk </li>
                            </ul>
                        </div>
                        
                </div>
            </div>
        </footer>
    </Fragment>
);
}
 
export default Footer;