let balance = 10;
let yesPool = 0;
let noPool = 0;
let votePlaced = false;

function placeBet(type){
 const amt = Number(document.getElementById("amount").value);

 if(votePlaced){
  status.innerText = "Bet already placed!";
  return;
 }

 if(amt <= 0 || amt > balance){
  status.innerText = "Invalid amount!";
  return;
 }

 balance -= amt;
 document.getElementById("wallet").innerText =
  "Balance: " + balance + " SOL";

 if(type === "yes") yesPool += amt;
 else noPool += amt;

 document.getElementById("pool").innerText =
  yesPool + noPool;

 votePlaced = true;

 status.innerText = "Stake Encrypted 🔒";
}

function reveal(){
 if(!votePlaced){
  status.innerText = "Place bet first!";
  return;
 }

 const total = yesPool + noPool;
 if(total === 0) return;

 const yesPercent = (yesPool / total) * 100;

 document.getElementById("yesBar").style.width =
  yesPercent + "%";

 status.innerText =
  "YES: " + yesPool + " SOL | NO: " + noPool + " SOL";
}
