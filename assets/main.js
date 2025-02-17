// button and elements
let channelBlocks = document.querySelector('#channel-blocks')
let showVideoButton = document.querySelector('#show-video-button')
let showAllButton = document.querySelector('#show-all-button')
let showImageButton = document.querySelector('#show-image-button')
let showTextButton = document.querySelector ('#show-text-button')
let showAudioButton = document.querySelector ('#show-audio-button')

// on click show video
showVideoButton.onclick = () => {
	channelBlocks.classList.add('show-video')
	channelBlocks.classList.remove('show-image')
	channelBlocks.classList.remove('show-text')
	channelBlocks.classList.remove('show-audio')
}

// on click show image
showImageButton.onclick = () => {
	channelBlocks.classList.add('show-image')
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-text')
	channelBlocks.classList.remove('show-audio')
}

// on click show text
showTextButton.onclick = () => {
	channelBlocks.classList.add('show-text')
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-image')
	channelBlocks.classList.remove('show-audio')
}

// on click show audio
showAudioButton.onclick = () => {
	channelBlocks.classList.add('show-audio')
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-image')
	channelBlocks.classList.remove('show-text')
}

showAllButton.onclick = () => {
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-image')
	channelBlocks.classList.remove('show-text')
	channelBlocks.classList.remove('show-audio')
}



