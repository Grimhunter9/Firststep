import React, { Component } from 'react';
import a from  './1.jpg';
import b from  './2.jpg';
import c from  './3.jpg';
import d from  './4.jpg';
import e from  './5.jpg';
import f from  './6.jpg';


class Gal extends React.Component {
  render() {
    return(
<div className="gala"> 
        <img src={a} alt=""/>
        <img src={b} alt=""/>
        <img src={c} alt=""/>
        <img src={d} alt=""/>
        <img src={e} alt=""/>
        <img src={f} alt=""/>           
</div>
)
}
}

export default Gal;