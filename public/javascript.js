

// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: { max: 640 }, height: {max: 360} } }; 
var canvas = document.querySelector('canvas');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

var filters = ['', 'grayscale', 'sepia', 'invert'], currentFilter = 0;
document.querySelector('#capture').addEventListener('click', function (event) {
	if (video) {
		canvas.width = video.clientWidth;
		canvas.height = video.clientHeight;
		var context = canvas.getContext('2d');
		context.drawImage(video, 0, 0);

		
		if (currentFilter > filters.length - 1) currentFilter = 0;
		canvas.className = filters[currentFilter];
		currentFilter++;
		// context.fillStyle = "white";
		// context.fillText("Hello World!", 10, 10);
		}
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



