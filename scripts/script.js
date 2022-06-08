const swiper = new Swiper(".swiper", {
  // Optional parameters
//   speed: 300,
//   autoplay: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
