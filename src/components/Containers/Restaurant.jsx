import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import About from '../Navs/About';
import Menu from '../Menu/Menu';
import Login from './../Login/Login';
import Menus from './../Menu/Menus';

const Restaurant = () => {
    return ( 
        <MainLayout>
            <Switch>
                <Route path="/" exact component={About}/>
                <Route path="/menu" component={Menus}/>
                <Route path="/login" component={Login}/>

            </Switch>
           
        </MainLayout>

     );
}
 
export default Restaurant;