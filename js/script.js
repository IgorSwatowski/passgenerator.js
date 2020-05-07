function passwdGenerate(){
    const getPassword = document.getElementById("passwordLength").value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    for(var i = 1; i <= getPassword; i++){
        password += characters.charAt(Math.floor(Math.random() * Math.floor(characters.length)));
    }
    document.getElementById("display").value = password;
    }

    document.getElementById("length").innerHTML = "Length: 15";
    document.getElementById("passwordLength").oninput = function(){

    document.getElementById("length").innerHTML = "Length: " + document.getElementById("passwordLength").value || 0;
}