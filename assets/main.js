// button and elements
let channelBlocks = document.querySelector('#channel-blocks')
let showVideoButton = document.querySelector('#show-video-button')
let showAllButton = document.querySelector('#show-all-button')

// on click
showVideoButton.onclick = () => {
	channelBlocks.classList.add('show-video')
}

showAllButton.onclick = () => {
	channelBlocks.classList.remove('show-video')
}
