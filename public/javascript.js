// Restrict camera resolution to 640x360
var constraints = { audio: false, video: { width: { max: 640 }, height: {max: 360} } };
var canvas = document.querySelector('canvas');
var filters = ['', 'grayscale', 'sepia', 'invert'], currentFilter = 0; 

//Accesses the user's camera and displays feed in video tag
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
		video = document.querySelector('video');
		var videoTracks = stream.getVideoTracks();
  		// console.log('Got stream with constraints:', constraints);
  		// console.log('Using video device: ' + videoTracks[0].label);
  		stream.onended = function() {
    			console.log('Stream ended');
 		 };
  		window.stream = stream; // make variable available to browser console
		  video.srcObject = stream;

});
//.catch(function(err) { console.log(err.name + ": " + err.message); }); // catches any errors

//Displays the captured selfie in the canvas area and applies filters as selected
document.querySelector('#capture').addEventListener('click', function (event) {
//	if (video) {
		canvas.width = video.clientWidth;
		canvas.height = video.clientHeight;
		var context = canvas.getContext('2d');
		context.drawImage(video, 0, 0);

		
		// if (currentFilter > filters.length - 1) currentFilter = 0;
		// canvas.className = filters[currentFilter];
		// currentFilter++;
		// context.fillStyle = "white";
		// context.fillText("Hello World!", 10, 10);
//		}
});

// Filter selection below

//No filter
document.querySelector('#noFilter').addEventListener('click', function (event) {
	canvas.className = filters[0];
	
});


//Black and White filter
document.querySelector('#blackAndWhite').addEventListener('click', function (event) {
	canvas.className = filters[1];
	
});


//Sephia Filter
document.querySelector('#sephia').addEventListener('click', function (event) {
	canvas.className = filters[2];
	
});


//Invert filter
document.querySelector('#invert').addEventListener('click', function (event) {
	canvas.className = filters[3];
	
});



// document.querySelector('#capture').addEventListener('click', function (event) {
// 	if (video) {
// 		canvas.width = video.clientWidth;
// 		canvas.height = video.clientHeight;

// 		var context = canvas.getContext('2d');
// 		context.drawImage(video, 0, 0);

// 		currentFilter++;
// 		if (currentFilter > filters.length - 1) currentFilter = 0;
// 		canvas.className = filters[currentFilter];
// 		context.fillStyle = "white";
// 		context.fillText("Hello World!", 10, 10);
// 	}
// });



