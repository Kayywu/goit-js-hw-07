import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", item.original);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.setAttribute("alt", item.description);

    link.append(image);
    gallery.append(link)

});

// options 
var lightbox = new SimpleLightbox(".gallery .gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
})

console.log(galleryItems);
