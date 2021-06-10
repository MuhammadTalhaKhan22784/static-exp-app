let custom_navbar_flag_dropdown = document.querySelector(
  ".custom_navbar_flag_dropdown"
);
let custom_navbar_list = document.querySelector(".custom_navbar_list");
let black_screen = document.querySelector(".black_screen");
let custom_navbar_input = document.querySelector(".custom_navbar_input");
let goto_top = document.querySelector(".goto_top");
let main_div_content = document.querySelector(".main_div_content");

let toggleDropdown = () => {
  custom_navbar_flag_dropdown.classList.toggle("open");
};

let toggleCustomNavbarList = () => {
  custom_navbar_list.classList.toggle("open");
  black_screen.classList.toggle("show");
};
let close_custom_nav_btn = () => {
  custom_navbar_list.classList.remove("open");
  black_screen.classList.remove("show");
};

black_screen.addEventListener("click", () => {
  custom_navbar_list.classList.remove("open");
  black_screen.classList.remove("show");
});

let custom_navbar_input_toggle_btn = () => {
  custom_navbar_input.classList.toggle("show");
};
