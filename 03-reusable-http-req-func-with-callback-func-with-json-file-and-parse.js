//json is a strings that looks like js objs
//when browser deals with <-> server, the msgs should be in text format

//u can get this text and convert it into obj (obj is build in js) using JSON.parse

//in json file -> everything should be in double quotes field and (val if it is str)

const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); //data now is js object
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not find data", undefined);
    }
  });
  request.open("GET", "./todos.json"); //note this is a json file
  request.send();
};
console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
