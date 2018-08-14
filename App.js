import React, { Component } from 'react';
import Comp from './component1';
import Webcam from './webcam';
import Loader from './loader';
import DrawSkeleton from './drawSkeleton';
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';


class App extends Component {

  componentDidMount() {
   this.main();
   console.log("componentDidMount");
  }


    main = async () => {


      Webcam();

      const canvas = document.getElementById('my-canvas');
      const ctx = canvas.getContext('2d');
      const img = document.querySelector('video');

      canvas.setAttribute('width', `${img.width}`);
      canvas.setAttribute('height', `${img.height}`);

      const imageScaleFactor = 0.5;
      const outputStride = 16;
      const flipHorizontal = false;
      
      const model = await posenet.load();


      while (true) {

        let poses = [];

        const pose = await model.estimateSinglePose(img, imageScaleFactor, flipHorizontal, outputStride);

        const modelLoad = "LOADED";

        Loader(modelLoad);

        poses.push(pose);

        ctx.drawImage(img, 0, 0, 640, 480);

        pose.keypoints.forEach(function(keypoint) {
              if (keypoint.score > 0.50) {

              ctx.beginPath();
              ctx.fillStyle = 'rgb(255, 255, 89)';
              ctx.fillText(keypoint.part, keypoint.position.x + 10, keypoint.position.y);
              ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, Math.PI * 2, false);
              ctx.fillStyle = 'rgb(255, 0, 0)';
              ctx.fill();

              }
         });

        const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
              pose.keypoints, 0.1);

              adjacentKeyPoints.forEach((keypoints) => {
                    console.log(keypoints);
              });
          
        DrawSkeleton(pose.keypoints, 0.5, ctx);

        await tf.nextFrame();

      }

    }
        

   render() {
        
        return (
                 <Comp />      
       );
    }

};


export default App;