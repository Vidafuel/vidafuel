var elem = document.querySelector(".main-carousel")
var flkty = new Flickity(elem, {
	// options
	contain: true,
	draggable: true,
	wrapAround: true,
	autoPlay: 5500,
})

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
	// options
})
