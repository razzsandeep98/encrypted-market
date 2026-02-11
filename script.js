let balance = 20;
let currentMarket = "";

function openBet(type){
 currentMarket = type;
 document.getElementById("popup").style.display="flex";
}

function confirmBet(){
 let amt = Number(document.getElementById("betAmount").value);

 if(amt <=0 || amt > balance){
  alert("Invalid Amount");
  return;
 }

 balance -= amt;
 document.getElementById("bal").innerText = balance;

 let pool = document.getElementById(currentMarket);
 pool.innerText = Number(pool.innerText) + amt;

 alert("Stake Encrypted 🔒");
 document.getElementById("popup").style.display="none";
}
