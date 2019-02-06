



//asynchronous programming. 
// we don't want to block the UI from loading until everthing is done. we want to show things as soon as it is there.

function whenDataIsLoaded(data) {
  console.log(data)
}

function putNameOnPage (githubJson) {
  const username = githubJson/login
  
}

//fetch uses promises
//1. convert data into json
//2. take the json and do something to it
fetch("https://api.github.com/users/mirandamon")
.then((data) => data.json())
.then((json) => putNameOnPage(json))