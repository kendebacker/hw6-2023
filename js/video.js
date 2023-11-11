// https://www.w3schools.com/ used for information on video tag

/**
 * Get element references
 */
const video  = document.querySelector("#player1")
const slider = document.querySelector("#slider")
const mute = document.querySelector("#mute")
const volume = document.querySelector("#volume")


/**
 * turn video loop and autoplay off on page load
 */
window.addEventListener("load", function() {
	video.autoplay = false
	video.loop = false
});

/**
 * set slider to video volume and play video when play button pressed
 */
document.querySelector("#play").addEventListener("click", function() {
	slider.value = video.volume * 100
	volume.innerText = `${slider.value}%`
	video.play()
});

/**
 * pause video when pause button pressed
 */
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});

/**
 * slow down video by 10% when slow down button pressed
 */

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9
	console.log(`Video playback rate: ${video.playbackRate}`)
});

/**
 * speed up video when speed up button pressed
 */
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1111111111111
	console.log(`Video playback rate: ${video.playbackRate}`)
});

/**
 * skip ahead when skip button pressed
 */
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 >= video.duration){
		video.currentTime = 0
	}else{
		video.currentTime = video.currentTime + 10
	}
	console.log(`Video current location: ${video.currentTime}`)
});

/**
 * mute when mute button pressed and toggle button label
 */
mute.addEventListener("click", function() {
	if(video.muted){
		video.muted = false
		mute.innerText = "Mute"
	}else{
		video.muted = true
		mute.innerText = "Unmute"
	}
});


/**
 * adjust volume when slider moved
 */
slider.addEventListener("change", function() {
	console.log(slider.value)
	video.volume = slider.value/100
	volume.innerText = `${slider.value}%`
});

/**
 * switch to vintage style when vintage button pressed
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
document.querySelector("#vintage").addEventListener("click", function() {
	if(!video.classList.contains("oldSchool")){
		video.classList.add("oldSchool")
	}
});


/**
 * switch to original style when original button pressed
 */
document.querySelector("#orig").addEventListener("click", function() {
	if(video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool")
	}
});


