//modal
const modal = document.querySelector(".modal");
const smember = document.querySelector(".smember");
const closebtn = document.querySelector(".modal-close");
const endmodal = document.querySelector("#close");

//show gallery
const gallery_img = document.querySelectorAll(".gallery_card img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const close = document.querySelector(".close");
const gallery_inner = document.querySelector(".gallery_inner img");
const gallery_all = document.querySelector(".gallery_show_all");

function toggleModal() {
  modal.classList.toggle("hide");
  //bắt sự kiện khi ấn vào hide bên css
}
smember.addEventListener("click", toggleModal);
closebtn.addEventListener("click", toggleModal);
endmodal.addEventListener("click", toggleModal);

// =======================show gallery
let currentIndex = 0;
function showIMG() {
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (currentIndex == gallery_img.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  gallery_inner.src = gallery_img[currentIndex].src;
  gallery_all.classList.add("show");
}

gallery_img.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showIMG();
  });
});

close.addEventListener("click", function () {
  gallery_all.classList.remove("show");
});

//remove esc

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery_all.classList.remove("show");
  }
});

//nut prev va next

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showIMG();
  }
});
next.addEventListener("click", function () {
  if (currentIndex < gallery_img.length - 1) {
    currentIndex++;
    showIMG();
  }
});
