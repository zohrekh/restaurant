import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
          <header>
            <div className="brand">
              <a className="logo">
                <i className="fa fa-utensils"/>
              </a>
              <div>
                <h1 className="main-name">خوش آمدید به رستوران طلایی</h1>
                <p className="sub-name"> از بهترین غذاهای ایرانی لذت ببرین</p>
              </div>          
            </div>
          </header>
        </Fragment>
      );
}
 
export default Header;