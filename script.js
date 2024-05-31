
function generatePassword(){
    let value=document.getElementById("length").value;
    let result = Math.random().toString(36).substr(2, parseInt(value));
    document.getElementById('password').value = result;

}

function reset(){
    document.getElementById('password').value ="";
    document.getElementById('length').value ="";
}

function copy(){
    let generatedpass = document.getElementById("password").value;
    const textarea = document.createElement('textarea');
    textarea.value = generatedpass;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Password Copied")    ;
}