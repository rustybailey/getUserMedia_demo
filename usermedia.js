window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.onload = function() {
    init(); 
};

function init(){  
  if(navigator.getUserMedia){  
      navigator.getUserMedia({video:true}, onSuccess, onFail);  
  } else {  
      alert('Your browser does not support the getUserMedia() API. Please switch to a modern browser.');  
  }  
}  
  
function onSuccess(stream){  
  document.getElementById('camFeed').src = URL.createObjectURL(stream);
  document.getElementById('snapshot').disabled = false;  
}  
  
function onFail(){ 
  document.getElementById('snapshot').disabled = true;  
  alert('A video connection could not be made. You either denied the request or you do not have a compatible webcam.');
}

function takePhoto(){  
  var picture = document.getElementById('photo');  
  var camera = document.getElementById('camFeed');  
  picture.getContext('2d').drawImage(camera, 0, 0, 320, 240);  
}