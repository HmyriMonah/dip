/* eslint-disable no-undef */


const anchor = document.getElementsByClassName('anchor');

var t;
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, -100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 500) {
    anchor[0].classList.add('anchor-appearance');
  } else {
    anchor[0].classList.remove('anchor-appearance');
  }
};

anchor[0].onclick = function () {
 up();
};



// window.onload = function upload() {
//   for (let i = 0; i < listLength; i++) {
//     productsList[i] = createObservableObject(productsList[i], updateUI);
//   }
//   productsList = createObservableArray(productsList, updateUI);
//   updateUI();
// };