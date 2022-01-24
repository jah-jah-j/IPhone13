const getData = () => {
  const cards = document.querySelector(".cross-sell__list");
  const button = document.querySelector(".cross-sell__add");

  let stack = 4,
    count = 1;

  const render = (data) => {
    cards.innerHTML = "";
    data.forEach((item) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `		
              <li>
                  <article class="cross-sell__item">
                    <img alt="${item.id}" class="cross-sell__image" src="./${item.photo}">
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <button class="button button_buy cross-sell__button" type="button">Купить</button>
                  </article>
                </li>`
      );
    });
  };

  const sliceArray = (data, index) => {
    return data.slice(0, index);
  };

  const dataChange = (data) => {
    let newStack = stack * count;
    render(sliceArray(data, newStack));

    if (data.length > newStack) {
      count++;
    } else {
      button.style.display = "none";
    }
  };

  const getCards = () => {
    fetch("./cross-sell-dbase/dbase.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Данные были получены с ошибкой.");
        }
      })
      .then((data) => dataChange(data))
      .catch((error) => {
        console.error(error.message);
      });
  };

  button.addEventListener("click", getCards);

  getCards();
};

getData();
