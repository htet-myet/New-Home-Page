"use strict";

const menuBtn = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  if (!overlay.classList.contains("active")) {
    overlay.classList.add("active");
    sideBar.style.transform = "translateX(0%)";
  }
});

closeBtn.addEventListener("click", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    sideBar.style.transform = "translateX(100%)";
  }
});
