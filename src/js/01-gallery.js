// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);



let imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function (evt) {
    evt.preventDefault();
    console.log('open picture');
});

gallery.on('close.simplelightbox', function (evt) {
  evt.preventDefault();
  console.log('close picture');
});



// imageContainer.addEventListener('click', onGaleryContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join('');
}

// function onGaleryContainerClick(evt) {
// //   var onKeyDownListener = null;
// //   const curImage = evt.target.dataset.source;
// //   console.log(curImage);
// //   const instance = basicLightbox.create(
// //     `<img src="${curImage}" width="800" height="600">`,
// //     {
// //       onShow: instance => {
// //         document.addEventListener('keydown', onKeyDownListener);
// //       },
// //       onClose: instance => {
// //         document.removeEventListener('keydown', onKeyDownListener);
// //       },
// //     }
// //   );

// //   onKeyDownListener = e => {
// //     console.log(e.keyCode);
// //     if (e.isComposing || e.keyCode === 27) {
// //       instance.close();
// //     }
// //   };

// //   instance.show();

//   evt.preventDefault();
// }
