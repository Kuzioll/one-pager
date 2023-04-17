let img = document.querySelector(".about-con_img");

function changeImg() {
  let screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    img.src = "asset/kumpan-electric-4QhDfdkzHUY-unsplash mobile.png";
  } else img.src = "asset/kumpan-electric-4QhDfdkzHUY-unsplash 1 (1).png";
}

window.addEventListener("load", changeImg);
window.addEventListener("resize", changeImg);
