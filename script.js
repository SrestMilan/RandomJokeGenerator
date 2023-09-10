// getting html element using document object
const jokeBox = document.getElementById("listjoke");
const btn = document.getElementById("btn");

// storing api url
const api_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJokeList = () => {
    jokeBox.classList.remove("fade");
    fetch(api_url)
    .then(data => data.json())
    .then(item =>{
        jokeBox.textContent = `${item.joke}`;
        jokeBox.classList.add("fade");
    });
}

// handling event
btn.addEventListener("click",getJokeList);

// invoking function
getJokeList();