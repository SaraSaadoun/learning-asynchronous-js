//it is common to request to get data from an api, get it then requesting from another api , get it then ....
//requesting is done in turn ->one after another (sequentially)
//so, we get many nested callbacks => "callback hell"
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not find data", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};

//callback hell => nesting callbacks
getTodos("todos.json", (err, data) => {
  console.log(data); //get the data from todos.json
  //then do another callback
  getTodos("mario.json", (err, data) => {
    console.log(data); //get the data from mario.json
    //then do another callback
    getTodos("sara.json", (err, data) => {
      console.log(data); //get the data from sara.json
    });
  });
});
