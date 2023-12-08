function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageSrc;

    // Use a timeout to allow the animation to take effect
    setTimeout(function () {
        lightbox.style.display = 'flex';
    }, 10);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
