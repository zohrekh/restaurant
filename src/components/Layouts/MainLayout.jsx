import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import TopNav from './../Navs/TopNav';

const MainLayout = props => {
    const {pathname} = props.location;
    return ( 
        <Fragment>
            <div className="landing-layer">
                <div className="container-fluid">
                    <TopNav/>
                   {pathname === "/" ? <Header/> : null}
                </div>
            </div>
           

            <main>
                <div className="container-fluid">
                    {props.children}
                </div>
            </main>
          

           
            <Footer/>
        </Fragment>
     );
}
 
export default withRouter(MainLayout);