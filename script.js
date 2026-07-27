let password = document.getElementById("password");

let strength = document.getElementById("strength");

password.addEventListener("keyup", function(){

    let value = password.value;

    if(value.length < 6){

        strength.innerHTML = "Weak Password";
        strength.style.color = "red";

    }
    else if(value.length < 8){

        strength.innerHTML = "Medium Password";
        strength.style.color = "orange";

    }
    else{

        strength.innerHTML = "Strong Password";
        strength.style.color = "green";

    }

});