//your JS code here. If required.
const thumbnails = document.querySelectorAll('.thumbnail');
const fullsize = document.getElementById('fullsize');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const thumbnailId = thumbnail.id;
    const fullsizeImgSrc = thumbnail.querySelector('img').src;

    fullsize.innerHTML = `<img src="${fullsizeImgSrc}" alt="Fullsize Image">`;
    fullsize.style.display = 'block';

    // Hide other thumbnails
    thumbnails.forEach((thumb) => {
      if (thumb.id !== thumbnailId) {
        thumb.style.display = 'none';
      }
    });
  });
});

fullsize.addEventListener('click', () => {
  fullsize.style.display = 'none';

  // Show all thumbnails
  thumbnails.forEach((thumbnail) => {
    thumbnail.style.display = 'block';
  });
});