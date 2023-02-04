//reusable http req function with callback function

//create http request
//add event listener to it, so its callback function will be fired when ready state changes
//ready state = 0 || 1 || 2 || 3 || 4
//4 means that the operation is done.
//when it is completed , we still need to check for the status (ok? the page is not found ? .. )
//status code 200 => means ok , 404 =>means the page is not found , ....

//so check for those => readyState === 4 && status === 200?
//                                 to log the response text of the this request into the console
//if readyState === 4 only? log ""could not find data""

const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not find data", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

console.log(1);
console.log(2);

//start a netweork req , pass it to another part of the browser
//this is not a blockig code ,it is async code (start now and finish later..)
// convension : pass error first then data for network as arguments
getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); //u can change this callback function

console.log(3);
console.log(4);
