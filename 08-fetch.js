//fetch api

//request using xmlhttp or fetch api((built in)(newer native fetch api)(less code)(promise api under the hood))
//fetch returns a promise - it looks at some point so, it will either resolve if success or reject if err

fetch("./todos .json")
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
//note 1:
//fetch rejects if we get some kind of network error ex:
//offline, cant reach api (resourse)

//note 2:
//misstyping of the resource for ex -> fetch resolves it! with a reponse of some status code(404 for ex)

//note 3:
//response obj:
//fetch api creates it for us
//does not include reponseText (like in http request)
//it includes prototype (where alot of methods live in),
//      one of them is json => response.json() return a promise (including the data)
//this promise can also be either resolved or rejected so return it and use ".then .catch" method for it

//summary -> 4 steps:
// fetch data
// take the response and return response.json() (a promise)
//.then
//.catch
