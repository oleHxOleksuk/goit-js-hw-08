import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  galereyList: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

refs.galereyList.insertAdjacentHTML(
  'beforeend',
  createImageCards(galleryItems)
);
refs.galereyList.addEventListener('click', onGaleryListClick);

function createImageCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div><a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" 
                alt="${description}" />
            </a></div>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
function onGaleryListClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}
console.dir(refs.body);
