const dadJokeButton = document.querySelector("#generate-dad-joke");

dadJokeButton.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementsByClassName("joke")[0].textContent = data.joke;
            console.log(data.joke);
        })
        .catch(error => {
            console.error("There is a problem with API !!!", error);
            document.getElementsByClassName("joke")[0].textContent = "Oops! Something went wrong. Try again later.";
        });

    setTimeout(() => {
        const audio = new Audio("hahasound.mp3");
        audio.play();
    }, 500);
});
