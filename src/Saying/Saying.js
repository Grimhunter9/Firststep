import React, { Component } from 'react';
import Dot from './dot.jpg';


class Say extends React.Component{
    render() {
        return (
             <div className="say">
                 <img className="dots" src={Dot} alt=""/>
                 <p className="p">"Act as if what you do makes a difference. It does"</p>
                 <p className="par">William James</p>
             </div>
        );
    }
}

export default Say;