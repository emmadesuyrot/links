// button and elements
let channelBlocks = document.querySelector('#channel-blocks')
let showVideoButton = document.querySelector('#show-video-button')
let showAllButton = document.querySelector('#show-all-button')
let showImageButton = document.querySelector('#show-image-button')

// on click
showVideoButton.onclick = () => {
	channelBlocks.classList.add('show-video')
	channelBlocks.classList.remove('show-image')
}

showImageButton.onclick = () => {
	channelBlocks.classList.add('show-image')
	channelBlocks.classList.remove('show-video')
}

showAllButton.onclick = () => {
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-image')
}



