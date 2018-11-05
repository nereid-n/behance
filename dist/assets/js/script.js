'use strict';

new WOW().init();

function countNumber(item) {
  var text = item.innerHTML;
  var itemArr = text.split('');
  var max = 40;
  var k = 0;
  var intervalNumber = setInterval(function () {
    var textNew = '';
    for (var i = 0; i < itemArr.length; i++) {
      var currentSymbol = '';
      var letter = itemArr[i];
      if (letter.match(/\d/)) {
        currentSymbol = parseInt(Math.random() * 10);
      } else {
        currentSymbol = letter;
      }
      textNew += currentSymbol;
    }
    item.innerHTML = textNew;
    k++;
    if (k === max) {
      item.innerHTML = text;
      item.classList.add('js-done');
      clearInterval(intervalNumber);
    }
  }, 50);
}

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll('.js-number'));

  if ("IntersectionObserver" in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var item = entry.target;
          if (!item.classList.contains('js-done')) {
            countNumber(item);
          }
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

if ($('.reviews__slider').length > 0) {
  $('.reviews__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button class="reviews__btn reviews__prev"><img src="assets/images/icons/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="reviews__btn reviews__next"><img src="assets/images/icons/arrow-right.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
//# sourceMappingURL=script.js.map
