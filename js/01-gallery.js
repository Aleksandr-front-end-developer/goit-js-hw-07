import { galleryItems } from './gallery-items.js';
// Change code below this line

const galaryWrapper = document.querySelector('.gallery');

function markup(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<li class="gallery__item">
							<a class="gallery__link" href="${original}">
								<img
									class="gallery__image"
									src="${preview}"
									data-source="${original}"
									alt="${description}"
								/>
							</a>
						</li>`
	}).join('');
}

const markupGallary = markup(galleryItems);

galaryWrapper.innerHTML = markupGallary;

galaryWrapper.addEventListener('click', showModalImage);


function showModalImage(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
		return
	}

	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);

	instance.show()

	if (instance.visible()) {
		galaryWrapper.addEventListener('keydown', (event) => {
			if (event.code !== 'Escape') {
				return
			}
			instance.close()
		});
	} else {
		galaryWrapper.removeEventListener()
	}

}




