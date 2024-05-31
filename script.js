
function generatePassword(){
    let value=document.getElementById("length").value;
    document.getElementById('password').value = Math.random().toString(36).substr(2, value);
}

function reset(){
    document.getElementById('password').value ="";
    document.getElementById('length').value ="";
}