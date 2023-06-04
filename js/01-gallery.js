import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add("gallery__item");

    const link = document.createElement('a');
    link.classList.add("gallery__link");
    link.setAttribute("href", item.original)

    const image = document.createElement('img');
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.setAttribute("data-source", item.original);
    image.setAttribute("alt", item.description)

    link.append(image);
    listItem.append(link)
    gallery.append(link)
});

   let instance = basicLightbox.create(
	'<img src="" alt=""'>
);

const openModal = (event) => {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(
        '<img src=${event.target.getAttribute("data-source")}
        alt=${event.target.getAttribute("alt")}>')

        instance.show();
    
    };

    gallery.addEventListener("click", openModal());

    gallery.addEventListener("keydown", (event) => {
        console.log(event.key);
        if (event.key === "Escape") {
            instance.close()
        }
    })



console.log(galleryItems);
