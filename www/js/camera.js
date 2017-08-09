document.addEventListener("deviceready", onDeviceReady, false);
  function getPicture() {
    navigator.camera.getPicture(
      function(imageURI) {
        var image = document.querySelector('#myImage');
        image.src = imageURI;
      },
      function(message){
        alert('Failed because: ' + message);
      },
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      }
    );
  }
