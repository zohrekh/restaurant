import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    return ( 
        <Fragment>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">خانه</NavLink> </li>
                    <li><NavLink to="/menu">منو</NavLink></li>
                    <li><NavLink to="/gallery">گالری</NavLink></li>
                    <li><NavLink to="/basket">سبد خرید</NavLink></li>
                    

                    <li className="menu-left"><NavLink to="/login">ورود</NavLink></li>
                    <li><NavLink to="/register">عضویت</NavLink></li>
                </ul>
            </nav>
        </Fragment>
     );
}
 
export default TopNav;