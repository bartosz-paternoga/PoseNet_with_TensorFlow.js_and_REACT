import React from 'react';
import './App.css';


const Comp = (props) => (

 
<div >
	
	<button onClick={props.main}>testo</button>

    <div id="canvas-wrapper" >
        <canvas id="my-canvas"></canvas>
 		<video id="video"  width="640" height="480" controls autoPlay ></video>
    </div>








</div>

);

export default Comp;
