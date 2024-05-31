
function generatePassword(){
    let password=Math.floor(Math.random() * 1000000000);
    document.getElementById('password').value=password;
}