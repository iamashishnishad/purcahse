
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
