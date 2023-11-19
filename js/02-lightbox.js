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
									alt="${description}"
								/>
							</a>
						</li>`
	}).join('');
}

const markupGallary = markup(galleryItems);

galaryWrapper.innerHTML = markupGallary;

var lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});
