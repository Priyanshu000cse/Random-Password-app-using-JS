const btn1 = document.querySelector(".btn");
const inputE1 = document.querySelector("input");
const copyicon = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alert-container");

btn1.addEventListener("click", () => {
   createPassword();
});
copyicon.addEventListener("click", ()=>{
copypassword();
if(inputE1.value){
    alertcontainer.classList.remove("active");
    setTimeout(() => {
        alertcontainer.classList.add("active");
    }, 4000);
}
});


function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordlength = 14;
    let password ="";
    for(let i=0; i<passwordlength; i++){
        const randomnum = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomnum, randomnum+1);
    }
    inputE1.value=password;
    alertcontainer.innerHTML= password + " copied";
}

function copypassword(){
    inputE1.select();
    inputE1.setSelectionRange(0, 9999);
   navigator.clipboard.writeText(inputE1.value);
}