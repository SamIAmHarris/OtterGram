var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var TACO_CAT_SRC = 'https://cdn.shopify.com/s/files/1/0032/7882/products/tacocat_art.png?v=1447870796';


function setDetails(imageUrl, imageTitle) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = imageTitle;
}

function imageFromThumb(thumbnail) {
  'use-strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use-strict';
  return thumbnail.getAttribute('data-image-title');
}

function resetThumbnailImageAttribute() {
  'use-strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(setSrcAttributeToDataImageUrl);
}

function setSrcAttributeToDataImageUrl(thumbnail) {
  'use-strict';
  var originalSrc = thumbnail.getElementsByClassName('thumbnail-image')[0].getAttribute('src');
  thumbnail.setAttribute('data-image-url', originalSrc);
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  var imageSrc = imageFromThumb(thumbnail);
  var title = titleFromThumb(thumbnail);
  setDetails(imageSrc, title);
}

function addThumbClickHandler(thumb) {
  'use-strict';
  thumb.addEventListener('click', function (event) {
      event.preventDefault();
      setDetailsFromThumb(thumb);
      resetThumbnailImageAttribute();
      changeRandomThumbnailLink(getThumbnailsArray());
  });
}

function getThumbnailsArray() {
  'use-strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  //convert the NodeList to an array
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function changeRandomThumbnailLink(thumbnails) {
  var randomNumber = Math.floor(Math.random() * 5);
  var randomThumbnail = thumbnails[randomNumber];
  randomThumbnail.setAttribute('data-image-url', TACO_CAT_SRC);
}

function initializeEvents() {
  'use-strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  changeRandomThumbnailLink(thumbnails);
}

initializeEvents();
