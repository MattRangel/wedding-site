function setCountdown() {
  const countdownElement = document.querySelector("#countdown");
  const daysLeft = Math.ceil((1749877200000 - Date.now())/86400000);
  countdownElement.innerText = `${daysLeft} ${daysLeft == 1 ? "day" : "days"} away!`;
}

class Gallery {
  constructor(idValue) {
    this.gallery = document.querySelector(`#${idValue}`);
    this.galleryImages = document.querySelectorAll(`#${idValue} img`);
    this.#setGalleryIndexValues();
  }

  #setGalleryIndexValues() {
    this.galleryImages.forEach((node, id) => node.dataset.index = id);
  }

  #getSelectedImage() {
    return this.gallery.querySelector(".selected");
  }

  #getSelectedImageId() {
    return +this.#getSelectedImage().dataset.index;
  }

  #swapSelectedTo(id) {
    this.#getSelectedImage().classList.toggle("selected");
    this.galleryImages[id].classList.toggle("selected");
  }

  next() {
    const nextId = (this.#getSelectedImageId() + 1) % this.galleryImages.length;
    this.#swapSelectedTo(nextId);
  }

  previous() {
    let previousId = this.#getSelectedImageId() - 1;
    previousId = previousId < 0 ? this.galleryImages.length - 1 : previousId;
    this.#swapSelectedTo(previousId);
  }
}

const dressGallery = new Gallery("dress-gallery");
setCountdown();
