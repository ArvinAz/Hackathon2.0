console.log("This works");
let button = document.querySelector(".EnterData-Button");
let passwordtext;
let usernametext;
let chad = document.querySelector(".chad");






button.addEventListener("click",function(){
    
     usernametext = document.querySelector(".fname");
     passwordtext = document.querySelector(".pstext");
     let errortext = document.querySelector(".Error");
    if((usernametext.value == "")||(passwordtext.value == "")){
        console.log("Error");
        console.log(errortext);
        errortext.textContent = "Error. Please Enter your the missing details";

    }
    else{
    
    let username = usernametext.value;
    let password = passwordtext.value;
    var user = { name: username, pass:password };
    localStorage.setItem('user', JSON.stringify(user));
    


    window.location = "blog-troll.html";
    }


}
)

