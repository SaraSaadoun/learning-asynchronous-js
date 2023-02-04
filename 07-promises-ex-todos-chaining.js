//todos example using promises (multiple requests sequentially)
//one of the best things about promises => chaining them

//notes are below the code
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error while getting resource");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos.json")
  .then((todosData) => {
    //get "todos.json" data
    console.log("promise 1 resolved: ", todosData);
    return getTodos("sara.json");
  })
  .then((saraData) => {
    //after that, get "sara.json" data
    console.log("promise 2 resolved: ", saraData);
    return getTodos("mario.json");
  })
  .then((marioData) => {
    // after that, get "mario.json"
    console.log("promise 3 resolved: ", marioData);
  })
  .catch((err) => {
    console.log("promise rejected :", err);
  });
//note 1

//getTodos = (the parent) function returns some data ,
//this data is passed to its child "then" as an argument
//if then needs to pass a value to another child "a second then",
//use return in the "first then" to return to the "second then" ,
//and so on..

//note 2
// if I do the below code, this defeat the concept of promise chaining
//callback hell again!!!

// getTodos("todos.json")
//   .then((todosData) => {
//     console.log("promise 1 resolved: ", todosData);
//
//      //calling getTodos itself again
//     ///////////////////////////////////////////////
//     getTodos("sara.json").then((data) => {
//       console.log("promise 2 resolved: ", data);
//     });
//     ///////////////////////////////////////////////
//   })
//   .catch((err) => {
//     console.log("promise rejected :", err);
//   });

//note 3
//catch at the end for any error (u don't need to repeat it for each then)
//ex: if the 2nd then had an error so catch is fired and the 3rd then is not executed
