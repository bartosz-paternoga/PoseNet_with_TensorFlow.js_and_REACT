import DrawSegment from './drawSegment';
import * as posenet from '@tensorflow-models/posenet';
   
const DrawSkeleton = (keypoints, minConfidence , ctx, scale = 1) => {
          const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
                 keypoints, minConfidence);

                adjacentKeyPoints.forEach((keypoints) => {
                  DrawSegment(toTuple(keypoints[0].position),
                  toTuple(keypoints[1].position), 'aqua', scale, ctx);
              });
            }  


      function toTuple({y, x}) {
              return [y, x];
            }

  

export default DrawSkeleton;