"use strict";
const activeTab = () => {
  const tabPageTitle = document.querySelector("title");

  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsImage = document.querySelector(".card__image_item");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsMemory = document.querySelector(".description__memory");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      image: "img/iPhone-graphite.webp",
      cost: 90000,
    },
    {
      name: "Silver",
      memory: "256",
      image: "img/iPhone-silver.webp",
      cost: 95000,
    },
    {
      name: "Sierra blue",
      memory: "512",
      image: "img/iPhone-sierra_blue.webp",
      cost: 100000,
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tabsImage.setAttribute("src", `${tabsOptions[index].image}`);
    tabsPrice.textContent = `${tabsOptions[index].cost}₽`;
    tabsMemory.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory} ГБ`;
    tabPageTitle.textContent = `IPhone 13 Pro ${tabsOptions[index].name}`;
  };

  const changeActiveTab = (indexOnClick) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexOnClick) {
        tab.classList.add("active");
      }
    });
    changeContent(indexOnClick);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTab(index);
    });
  });

  changeContent(0);
};

activeTab();
