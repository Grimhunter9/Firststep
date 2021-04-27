import React, { Component } from 'react';
import shoe1 from './1.jpg';
import shoe2 from './2.jpg';
import shoe3 from './3.jpg';
import shoe4 from './4.jpg';
import shoe5 from './5.jpg';
import shoe6 from './6.jpg';
import shoe7 from './7.jpg';
import shoe8 from './8.jpg';
import shoe9 from './9.jpg';
import shoe10 from './10.jpg';
import shoe11 from './11.jpg';
import shoe12 from './12.jpg';
import shoe13 from './13.jpg';
import shoe14 from './14.jpg';
import shoe15 from './15.jpg';
import shoe16 from './16.jpg';
import shoe17 from './17.jpg';
import shoe18 from './18.jpg';

 {/* <div >
          {
            imgs.map((img)=>{
              return(
                <div className="gallery">
                <button className="btn"><img className="sh" src={img} alt=""/></button> 
                </div>
              )
            })
          }
          </div>

          <div>
          {
            imgs2.map((img)=>{
              return(
                <div className="gallery">
                <button className="btn"><img className="sh" src={img} alt=""/></button> 
                </div>
              )
            })
          }
        </div>


        <div>
          {
            imgs3.map((img)=>{
              return(
                <div className="gallery">
                <button className="btn"><img className="sh" src={img} alt=""/></button> 
                </div>
              )
            })
          }
        </div>*/}

            {/*
             
            */}
    


  class Gall extends Component{
      render() {

     {/* const imgs = [shoe1,shoe2,shoe3,shoe4,shoe5,shoe6,]
      const imgs2= [shoe7,shoe8,shoe9,shoe10,shoe11,shoe12]
     const imgs3= [shoe13,shoe14,shoe15,shoe16,shoe17,shoe18]*/}
      return(

        <div>
          
             <div  className="gala">
                  <button className="btn"><img className="sh" src={shoe1} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe2} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe3} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe4} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe5} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe6} alt=""/></button> 

              </div>

              <div className="gala">
                  <button className="btn"><img className="sh" src={shoe7} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe8} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe9} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe10} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe11} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe12} alt=""/></button> 
              </div>

              <div className="gala">
                  <button className="btn"><img className="sh" src={shoe13} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe14} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe15} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe16} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe17} alt=""/></button> 
                  <button className="btn"><img className="sh" src={shoe18} alt=""/></button> 
              </div>

           

        </div>
);
}
} 

export default Gall;