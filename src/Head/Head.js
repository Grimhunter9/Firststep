import React, { Component } from 'react';
import Logo from './Logo.jpg';


class Head extends React.Component{
    render(){
        
        return(

     <div className="head">
         <img src={Logo} alt=""/>

         <div className="container">
            <p className="p1">The first step</p>
            <p className="step">It always begins, with a step ;) </p>
         </div>

    </div>
)
}
}

export default Head;