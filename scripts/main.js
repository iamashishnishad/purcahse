

document.querySelector("form").addEventListener("submit", signUpFun)


var personData=JSON.parse(localStorage.getItem("user")) || [];

function signUpFun(){

event.preventDefault();

var personObj={

name: document.querySelector("#name").value,
email: document.querySelector("#email").value,
address: document.querySelector("#address").value,
amount: document.querySelector("#amount").value,
};

// console.log(personObj);

personData.push(personObj);

localStorage.setItem("user",JSON.stringify(personData))

}