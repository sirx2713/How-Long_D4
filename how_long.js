let userName = prompt("Enter username");
alert("Hi " + userName + "!");
let userPassword = prompt("Create password: ");
if (userPassword.length < 4){
    alert("Password is too short!");
}
else if (userPassword > 4){
    let verifyPassword = prompt("Verify password: ");
    if (userPassword !== verifyPassword){
        alert("Password does not match!");
    }
    else if (userPassword === verifyPassword){
        alert(userName + " welcome to iSAD.");
    }
}