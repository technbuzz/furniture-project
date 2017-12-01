var hmc = (function(){
	function initGallery(){
		const largeImg = document.querySelector('.prod-single_img img');
		let galleryImages = document.querySelectorAll('.prod-gallery a');
		galleryImages.forEach(function attachEvent(item){
			item.addEventListener('click', function clickHandler(e){
				e.preventDefault();
				largeImg.src = item.href;
			});//clickHandler
		});// attachEvent
	}

	return {
		initGallery: initGallery
	}
})();





