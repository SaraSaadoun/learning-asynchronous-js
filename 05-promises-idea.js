//getSth or getTodos -> inside it some kind of network request
//when using promises the 1st thing is to return new promise
//2 param are in a promise func are built in js
const getSth = () => {
  return new Promise((resolve, reject) => {
    //body:
    //do network req // fetch sth
    //if success ->call resolveFunc
    //if failed  ->call rejectFunc

    //do network req // fetch sth
    resolve("data");
    reject("error");
  });
};

//"then" have 2 callback functions:
//the 1st is fired when the promise is resolved
//the 2nd is fired when the promise is rejected

// getSth().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//the same as the previous ( but neater "chaining")
//then callback function will be fired if the promise is resolved
//otherwise err is catched
getSth()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(getSth()); //return a promise
