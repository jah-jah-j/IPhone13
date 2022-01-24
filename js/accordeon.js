const accordeon = () => {
  const chItems = document.querySelectorAll(".characteristics__item");

  chItems.forEach((item, index) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    const removeAccordeonsActive = (button, content) => {
      button.classList.remove("active");
      content.classList.remove("open");
    };

    removeAccordeonsActive(chButton, chContent);

    const accordeonToggle = (item) => {
      const chButton = item.querySelector(".characteristics__title");
      const chContent = item.querySelector(".characteristics__description");
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        chContent.style.height = chContent.scrollHeight + "px";
      }

      chButton.classList.toggle("active");
      chContent.classList.toggle("open");
    };

    chButton.addEventListener("click", () => {
      accordeonToggle(item);
      chItems.forEach((closeItem, closeIndex) => {
        const chContent = closeItem.querySelector(
          ".characteristics__description"
        );
        if (chContent.classList.contains("open") && closeIndex !== index) {
          accordeonToggle(closeItem);
        }
      });
    });
  });
};

accordeon();
