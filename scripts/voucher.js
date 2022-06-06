


const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

// console.log(url)
fetch(url)
.then(function (res){
 return res.json();
})

.then(function (res){
    console.log(res.data);
})
.catch(function (err){
    console.log(err);
});

async function getData(){
    try{
        let res = await fetch(url);

        let user = await res.json();
        console.log((user.data))
    }catch(err){
        console.log(err);
    }
}

getData();

function append(data){
    let container = document.getElementById("voucher_list").value;
    data.forEach(function (el){
        let img=document.createElement("img");
        img.src=el.image;

        let nam=document.createElement("nam");
        nam.innerText=el.name;


        let p=document.createElement("p");
        p.innerText=el.price;


        let div = document.createElement("div");
        div.append(img, nam, p);

        voucher_list.append(div);
    });
}


// async function getData(){
//     let data1 = document.getElementById("search").value;


//   let url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

// //   console.log(url)


// let res = await fetch(url);

// let data= await res.json();

// append(data);

// console.log(data);

// }

// function append(data){

//     let voucher_list = document.getElementById("voucher_list");

//     let img= document.createElement("img");
//     img.src=`${data.image}`;

//     let nam = document.createElement("nam");
//     nam.innerText=`${data.name}`;


//     let pri = document.createElement("pri")
//     pri.innerText=`${data.price}`;

//     var btn =document.createElement("button");
//     btn.innerText="Buy";

//     btn.addEventListener("click", function(){
//         buy(data)
//     })



//     voucher_list.append(img, nam, pri, btn);
// }


function append(){
    let data=JSON.parse(localStorage.getItem('user')) || [];


    let conatiner = document.getElementById('wallet_balance');


    container.innerHTML=null;

    data.forEach(function (el){
        let div = document.createElement('div')

        let wallet = document.createElement('wallet');
        wallet.innerText=el.amount;

        div.append(wallet)

        wallet_balance.append(div);
    })
}
