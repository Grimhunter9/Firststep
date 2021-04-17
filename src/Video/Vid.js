import React, { Component } from 'react';
import ReactPlayer from 'react-player';



class Vid extends React.Component{
    render(){

        return(
      <div className="con">
         <ReactPlayer className="vcn" url="http://www.youtube.com/watch?v=E4mWvZflgPc"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="50vw"
        style={{ pointerEvents: 'none'}}/>

        <div className="quot">
          <p className="p2">“The way to get started is to take the first step with dream-powered optimism.”</p>
          <p className="p3">Debasish Mridha</p>
        </div>
            
     </div>
)
}
}

export default Vid;