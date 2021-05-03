import React, { Component } from 'react';
import Menu from './Menu';

class Menus extends Component {
    state = {  
        cardfoods:[
            {id:1,title:"پیتزا گوشت",price:"20000",textfood:" سس گوجه فرنگی ، موتزارلا ، پپرونی ، کوریزو ، ژامبون پنکتا و مرغ"},
            {id:2,title:"پیتزا گوشت",price:"20000",textfood:" سس گوجه فرنگی ، موتزارلا ، پپرونی ، کوریزو ، ژامبون پنکتا و مرغ"},
            {id:3,title:"پیتزا گوشت",price:"20000",textfood:" سس گوجه فرنگی ، موتزارلا ، پپرونی ، کوریزو ، ژامبون پنکتا و مرغ"},
            {id:4,title:"پیتزا گوشت",price:"20000",textfood:" سس گوجه فرنگی ، موتزارلا ، پپرونی ، کوریزو ، ژامبون پنکتا و مرغ"}
        ]
    };
    render() { 
        return ( 
<div className="container">
    <div className="separator color-separator"></div>
    <div className="cards">

        {this.state.cardfoods.map(cardfood =>( 
        <Menu 
        key={cardfood.id}
        title={cardfood.title}
        price={cardfood.price}
        textfood={cardfood.textfood}

        />))}
    </div>
</div>
         );
    }
}
 
export default Menus;

