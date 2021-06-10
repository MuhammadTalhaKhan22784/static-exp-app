let k2_right_header = document.querySelector(".k2_right_header");
let k2_header_btn = document.querySelectorAll(".k2_header_btn");

let k2_menu = document.querySelector(".k2_menu");
let k2_menu_item = document.querySelectorAll(".k2_menu_item");

for (let i = 0; i < k2_header_btn.length; i++) {
  k2_header_btn[i].addEventListener("click", () => {
    k2_right_header.querySelector(".active").classList.remove("active");
    k2_header_btn[i].classList.add("active");

    k2_menu.querySelector(".active").classList.remove("active");
    k2_menu_item[i].classList.add("active");
  });
}
