//fetch api: chain different promises together = still messy
//so,
//use async and await
//async and await : section of async code in a single func
//then use await to chain promises together (sequentially inside async section)

//calling sync func returns a promise regardless what is inside it

// const getTodos = async () => {};
// const text = getTodos();
// console.log(text);

///////////////////////////////////////////////
const getTodos = async () => {
  //sync code
  const response = await fetch("./todos.json"); //wait till this promise is resolved
  const data = await response.json(); //then wait till this promise is resolved
  //console.log(data); // log data itself in the console
  return data; //however, return promise because of the async func
};
//notes:
//await stop(stall) assigning a value to the variable(ex: response) until the promise is resolved
//so, is it a blocking code??
//no, note await blocks the rest inside the function but the whole function is async so it not a blocking code

//still need to call .then once because the async returns a promise
console.log(1);
console.log(1);
//non blocking (aync):
getTodos().then((data) => console.log("resolved", data));
console.log(1);
console.log(1);

//why using async??
//1.grab all of the async code in a func
//2.non blocking
//3.cleaner than chaining "different" promises

// note:
//async and await are not supported for all browsers (all modern ones are supported in)
//I don't know now is supported for all or not
