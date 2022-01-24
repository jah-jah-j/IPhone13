const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Данные были получены с ошибкой.");
      }
    })
    .then((json) => console.log(json))
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log("finaly");
    });
};

getData();
