function passwdGenerate(){

    let getPassword = document.getElementById("passwordLength").value;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    for(var i = 0; i <= getPassword; i++){
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }
    document.getElementById("display").value = password;
}

    document.getElementById("length").innerHTML = "Length: 15";
    document.getElementById("passwordLength").oninput = function(){

    if(document.getElementById("passwordLength").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("passwordLength").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}