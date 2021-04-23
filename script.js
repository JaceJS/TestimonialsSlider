const prevIcon = document.getElementById("prev-icon");
const nextIcon = document.getElementById("next-icon");
const slides = document.querySelectorAll(".item");

let index = 0;

function prevSlide() {
  index--;
  if(index < 0){
      index = slides.length - 1;
  }
  slides.forEach((item) => {
    item.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if(index > slides.length - 1){
    index = 0;
  }
  slides.forEach((item) => {
    item.style.display = "none";
  });
  slides[index].style.display = "flex";
}

prevIcon.addEventListener("click", prevSlide);

nextIcon.addEventListener("click", nextSlide);
