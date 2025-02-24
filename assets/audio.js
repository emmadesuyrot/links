	// source: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
	// Added an additional script file to add the music Play and Pause button
	// the script matches the html <audio> inside the <div class="navbar">

document.addEventListener("DOMContentLoaded", function() {
	const audio = new Audio("assets/audio/GibranAlcocer-Idea10.mp3");
	const buttons = document.querySelectorAll("button");

	buttons.forEach(button => {
		// forEach (loops over each button)
	
		button.addEventListener("click", () => {
		// If the audio is playing, pause it, else play it
		if (audio.paused) {
			audio.play();
			button.textContent = "Pause Music";
		} else {
			audio.pause();
			button.textContent = "Play Music";
		}
		});
	});
	});