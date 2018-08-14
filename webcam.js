
const Webcam = () =>{ 
      
        navigator.getUserMedia (

          // constraints
                {
                   video: true,
                   audio: false
                },

          // successCallback
                function(a) {   
                const video = document.querySelector('video');

                video.srcObject = a; 

                },

          // errorCallback
                function() {}

        );

    }


export default Webcam;