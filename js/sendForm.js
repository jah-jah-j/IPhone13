const sendForm = () => {
  const button = document.querySelector(".card-details__button_delivery");
  const modal = document.querySelector(".modal");
  const cardTitle = document.querySelector(".card-details__title");
  const closeModal = modal.querySelector(".modal__close");
  const modalTitle = modal.querySelector(".modal__title");
  const modalSubmit = modal.querySelector(".modal__submit");
  const labels = document.querySelectorAll(".modal__label");
  let buyMessage = {};

  const sendMessage = (message) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => alert("Данные отправлены"));
    modal.style.display = "none";
  };

  button.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = cardTitle.textContent;
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    labels.forEach((label) => {
      const span = label.querySelector(".modal__label-text").textContent;
      const input = label.querySelector(".modal__input");

      buyMessage[span] = input.value;
      input.value = "";
    });
    sendMessage(buyMessage);
  });
};

sendForm();
