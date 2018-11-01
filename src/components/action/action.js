function countNumber(item) {
  let text = item.innerHTML;
  let itemArr = text.split('');
  let max = 40;
  let k = 0;
  let intervalNumber = setInterval(function() {
    let textNew = '';
    for (let i = 0; i < itemArr.length; i++) {
      let currentSymbol = '';
      let letter = itemArr[i];
      if(letter.match(/\d/)) {
        currentSymbol = parseInt(Math.random() * 10);
      }
      else {
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

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll('.js-number'));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let item = entry.target;
          if (!item.classList.contains('js-done')) {
            countNumber(item);
          }
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
