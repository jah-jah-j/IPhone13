"use strict";

seamless.polyfill();

const links = document.querySelectorAll(".header-menu__item a");
const linkCharacteristics = document.querySelector(
  ".card-details__link-characteristics"
);

links.forEach((link) => {
  getSection(link);
});

getSection(linkCharacteristics);

//functions

function getSection(link) {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();

    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    if (section) {
      smoothScroll(section);
    } else {
      smoothScrollNull();
    }
  });
}

function smoothScroll(target) {
  seamless.elementScrollIntoView(target, {
    behavior: "smooth",
    block: "start",
  });
}

function smoothScrollNull() {
  seamless.elementScrollIntoView(document.getElementById("cross-sell"), {
    behavior: "smooth",
    block: "end",
  });
}
