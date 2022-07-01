// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const createGallary = document.querySelector("div.gallery");

const arrayCards = galleryItems
    .map(({ preview, original, description }) =>
        `<div class="gallery__item">
       <a class="gallery__link" href=${original}>
        <img class="gallery__image" 
        src=${preview} 
        data-source=${original} 
        alt=${description} />
        </a>
        </div>`)
    .join("");
createGallary.insertAdjacentHTML("afterbegin", arrayCards);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    
});