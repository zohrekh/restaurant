import React from 'react';
import { Card } from 'react-bootstrap';

const Menu = ({title,price,textfood}) => {
    return ( 
        <Card>
            <Card.Body>
           
                <Card.Title>{`${title}`}</Card.Title>
            
                <Card.Subtitle className="mt-1 text-muted menu-item-dot">{`${price}`} تومان</Card.Subtitle>
                <Card.Text>
               {`${textfood}`}
                </Card.Text>
                <div className="buy-food">
                    <i className="fa fa-plus-circle hot-desc"></i>
                </div>
            </Card.Body>
        </Card>


     );
}
 
export default Menu;