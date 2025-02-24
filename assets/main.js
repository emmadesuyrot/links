// // button and elements
// let channelBlocks = document.querySelector('#channel-blocks')
// let showVideoButton = document.querySelector('#show-video-button')
// let showAllButton = document.querySelector('#show-all-button')
// let showImageButton = document.querySelector('#show-image-button')
// let showTextButton = document.querySelector ('#show-text-button')
// let showAudioButton = document.querySelector ('#show-audio-button')

// // on click show video
// showVideoButton.onclick = () => {
// 	channelBlocks.classList.add('show-video')
// 	channelBlocks.classList.remove('show-image')
// 	channelBlocks.classList.remove('show-text')
// 	channelBlocks.classList.remove('show-audio')
// 	channelBlocks.classList.remove('show-linked-audio')
// 	channelBlocks.classList.remove('show-link')
// }

// // on click show image
// showImageButton.onclick = () => {
// 	channelBlocks.classList.add('show-image')
// 	channelBlocks.classList.remove('show-video')
// 	channelBlocks.classList.remove('show-text')
// 	channelBlocks.classList.remove('show-audio')
// 	channelBlocks.classList.remove('show-linked-audio')
// 	channelBlocks.classList.remove('show-link')
// }

// // on click show text & link
// showTextButton.onclick = () => {
// 	channelBlocks.classList.add('show-text')
// 	channelBlocks.classList.add('show-link')
// 	channelBlocks.classList.remove('show-video')
// 	channelBlocks.classList.remove('show-image')
// 	channelBlocks.classList.remove('show-audio')
// 	channelBlocks.classList.remove('show-linked-audio')
// }

// // on click show audio & linked ausio
// showAudioButton.onclick = () => {
// 	channelBlocks.classList.add('show-audio')
// 	channelBlocks.classList.add('show-linked-audio')
// 	channelBlocks.classList.remove('show-video')
// 	channelBlocks.classList.remove('show-image')
// 	channelBlocks.classList.remove('show-text')
// 	channelBlocks.classList.remove('show-link')
// }

// showAllButton.onclick = () => {
// 	channelBlocks.classList.remove('show-video')
// 	channelBlocks.classList.remove('show-image')
// 	channelBlocks.classList.remove('show-text')
// 	channelBlocks.classList.remove('show-audio')
// 	channelBlocks.classList.remove('show-linked-audio')
// 	channelBlocks.classList.remove('show-link')
// }

// html element: event change. source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event 
// I wanted to use a filter instead of having multiple buttons to sort my blocks!
// the script matches the html <label>

let channelBlocks = document.querySelector('#channel-blocks');
let selectElement = document.querySelector('.snapshot');

selectElement.addEventListener('change', (event) => {
	let selectedValue = event.target.value;
	channelBlocks.classList.remove('show-video', 'show-image', 'show-text', 'show-audio', 'show-linked-audio', 'show-link');

	if (selectedValue === 'show-video-button')
	{channelBlocks.classList.add('show-video');}
	else if (selectedValue === 'show-image-button')

	{channelBlocks.classList.add('show-image');}
	else if (selectedValue === 'show-text-button')
	
	// gathered blocks that include text
	{channelBlocks.classList.add('show-text', 'show-link');}
	else if (selectedValue === 'show-audio-button')

	// gathered all audio blocks
	{channelBlocks.classList.add('show-audio', 'show-linked-audio');
}

});


