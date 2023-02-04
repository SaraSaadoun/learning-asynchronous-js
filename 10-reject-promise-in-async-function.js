//reject a promise in async??
//code 1:

// const getTodos = async () => {
//   const response = await fetch("./todos.json"); //as mentioned previously,
//   //                                                  it is still resolved if the resource is wrong for ex
//   //                                                  if it is rejected => invalid response

//   //if it is rejected(try to change name of the json file to ./todoss.json)
//   //              => invalid response
//   //              => so an error is caught in the below line says "this is an err in json file",
//   //                  but it is not !!!!! (Catch this error correctly in "code 2" below)

//   const data = await response.json(); // if it is an invaild json file => rejected and err is caught in the ".catch"
//   //note: try to enter invalid json file (for ex remove quotes from a field in it)
//   //      to see the result
//   return data;
// };

//code 2 (improvement):

const getTodos = async () => {
  const response = await fetch("./todoss.json"); // note: file does not exist ,
  //if the above promise is rejected, catch this err:
  if (response.status !== 200) {
    throw new Error("can not fetch the data"); //promise returned by async func is rejected and will be caught after that in .catch
  }
  const data = await response.json(); //if rejected it is cought in .catch

  return data;
};
getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));

//to sumup:
//1.check after fetch() if the response is valid or not before going to the next step
//because fetch api doesn't handle this on its own
//2.the last promise returned from async is being checked in .then.catch
