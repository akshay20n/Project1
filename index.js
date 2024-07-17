const press=document.querySelector("button");
press.addEventListener("click",()=>{

fetch("https://api.api-ninjas.com/v1/dadjokes")
        .then(response => response.json())
        .then(data => {
             document.getElementsByClassName("joke")[0].textContent = data.joke;
             console.log(data.joke);
        })
        .catch(error => {
            console.error("There is a problem with API !!!", error);
        });
   setTimeout(()=>{
       audio= new Audio("hahasound.mp3");
      audio.play();
   },500);
        
});



        

