//todos example using promises
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    //do network req
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      //if success ->call resolveFunc
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
      //if failed  ->call rejectFunc
      else if (request.readyState === 4) {
        reject("error while getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos.json")
  .then((todosData) => {
    console.log("promise resolved: ", todosData);
  })
  .catch((err) => {
    console.log("promise rejected :", err);
  });
