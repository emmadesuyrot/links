// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

let channelSlug = 'what-it-feels-like-to-fall-in-love' // The “slug” is just the end of the URL

let placeChannelInfo = (data) => {
	// Target some elements in your HTML:
	let channelTitle = document.querySelector('#channel-title')
	let channelDescription = document.querySelector('#channel-description')
	let channelCount = document.querySelector('#channel-count')
	let channelLink = document.querySelector('#channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	// channelCount.innerHTML = data.length
	channelLink.href = `https://www.are.na/channel/${channelSlug}`
}

// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.querySelector('#channel-blocks')

	// Links!
	if (block.class == 'Link') {
		let linkItem =
			`
			<li class="link-block">
				<button class="polaroid">
					<img src="${ block.image.original.url }"></img>
					<h3 class="block-title">${block.title}</h3>
				</button>
				<dialog>
						<div>
							<p>${block.title}</p>
							<p>${block.description_html}</p>
							<a href="${block.image.original.url}">See original ↗</a>
						</div>
						<button class="Close">×</button>
				</dialog>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}

	// Images!
	else if (block.class == 'Image') {
		// console.log("block", block)
		// …up to you!
		let imageItem = 
		`
			<li class="image-block">
				<button class="polaroid">
						<img src="${block.image.original.url}"></img>
						<h3 class="block-title">${block.title}</h3>
					</button>
					<dialog>
						<div>
							<p>${block.title}</p>
							<p>${block.description_html}</p>
						</div>
						<img src="${block.image.original.url}"></img>
						<a href="${block.image.original.url}">See original ↗</a>
						<button class="Close">×</button>
					</dialog>
			</li>
		`
		channelBlocks.insertAdjacentHTML('beforeend', imageItem);
	}

	// Text!
	else if (block.class == 'Text') {
		// …up to you!
		// console.log(block.content_html)
		let textItem = 
		`
			<li class="text-block">
				<button class="polaroid">
					<blockquote>${block.content}</blockquote>
					<h3 class="block-title">${block.title}</h3>
				</button>
				<dialog>
						<div>
							<p>${block.title}</p>
							<p>${block.content}</p>
						</div>
						<button class="Close">×</button>
				</dialog>
			</li>
		`
		channelBlocks.insertAdjacentHTML('beforeend', textItem)
	}

	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type // Save us some repetition

		// Uploaded videos!
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li class="video-block">
				<button class="polaroid">
					<video autoplay muted>
					<source src="${ block.source.url }" type="video/mp4">
					<source src="${ block.source.url }" type="video/ogg">
					</video>
					<h3 class="block-title">${block.title}</h3>
				</button>
				<dialog>
						<div>
							<p>${block.title}</p>
							<source src="${ block.source.url }" type="video/mp4">
							<source src="${ block.source.url }" type="video/ogg">
							<a href="${ block.source.url }">See original ↗</a>
						</div>
						<button class="Close">×</button>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		// else if (attachment.includes('pdf')) {
		// 	// …up to you!
		// 	let pdfItem = 
		// 	`
		// 		<li class="pdf-block">
		// 			<button class="polaroid">
		// 				<img src="${ block.contents.image.original.url }"></img>
		// 				<h3 class="block-title">${block.title}</h3>
		// 			</button>
		// 			<dialog>
		// 				<div>
		// 					<p>${block.title}</p>
		// 					<p>${block.description_html}</p>
		// 				</div>
		// 				<img src="${block.image.original.url}"></img>
		// 				<a href="${block.image.original.url}">See original ↗</a>
		// 				<button class="Close">×</button>
		// 			</dialog>
		// 		</li>
		// 	`
		// 	channelBlocks.insertAdjacentHTML('beforeend', pdfItem);
		// }

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			let audioItem =
				`
				<li class="audio-block">
				<button class="polaroid">
					<audio controls src="${block.attachment.url}"></audio>
					<h3 class="block-title">${block.generated_title}</h3>
				</button>
				<dialog>
						<div>
							<p>${ block.generated_title }</p>
							<p>${block.content}</p>
							<audio controls src="${block.attachment.url}"></audio>
						</div>
					<button class="Close">×</button>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem);
			console.log("Success!");
			// More on audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		}
	}

	// <audio controls src="${block.attachment.url}"></audio>


	// Linked media…
	else if (block.class == 'Media') {
		let embed = block.embed.type

		// Linked video!
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li class="video-block">
				<button class="polaroid">
					${block.embed.html}
					<h3 class="block-title">${block.title}</h3>
				</button>
				<dialog>
						<div>
							<p>${block.title}</p>
						</div>
					<button class="Close">×</button>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}

		// Linked audio!
		else if (embed.includes('rich')) {
			// …up to you!
			let linkedAudioItem = 
			`
			<li class="linked-audio-block">
			<button class="polaroid">
				<img src="${ block.image.thumb.url }"></img>
				<h3 class="block-title">${ block.generated_title }</h3>
			</button>
				<dialog>
						<div>
							<p>${ block.generated_title }</p>
							<img src="${ block.image.thumb.url }"></img>
						</div>
						<button class="Close">×</button>
				</dialog>
			</li>
			`
			channelBlocks.insertAdjacentHTML('beforeend', linkedAudioItem)
		}

	}
}

// It‘s always good to credit your work:
let renderUser = (user, container) => { // You can have multiple arguments for a function!
	let userAddress =
		`
		<address>
			<img src="${ user.avatar_image.display }"></img>
			<h3>${ user.first_name }</h3>
			<p><a href="https://are.na/${ user.slug }">Are.na profile ↗</a></p>
		</address>
		`
	container.insertAdjacentHTML('beforeend', userAddress)
}

let initInteraction = () => {
	// add block here or just ('li') to target all blocks
	let blocks = document.querySelectorAll('.image-block, .link-block, .text-block, linked-audio-block, .audio.block, .video-block')
	blocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')
		
		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => { // Listen on our `modal` also…
			if (event.target == dialog) { // Only if clicks are to itself (the background).
				dialog.close() // Close it then too.
			}}
	})
}

// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log(data) // Always good to check your response!
		placeChannelInfo(data)

		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderBlock(block) // Pass the single block data to the render function
		})

		initInteraction()
	})
