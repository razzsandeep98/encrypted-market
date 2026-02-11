let balance = 10;
let yesPool = 0;
let noPool = 0;

function encrypt(v){
 return btoa(v + Math.random());
}

function placeBet(type){
 const amt = Number(amount.value);

 if(amt > balance || amt <= 0){
  status.innerText="Invalid Amount";
  return;
 }

 balance -= amt;
 wallet.innerText="Balance: "+balance+" SOL";

 if(type==="yes") yesPool += amt;
 else noPool += amt;

 pool.innerText = yesPool + noPool;

 status.innerText="Stake Encrypted 🔒";
}

function reveal(){
 const total = yesPool + noPool;
 if(total === 0) return;

 const yesPercent = (yesPool/total)*100;
 yesBar.style.width = yesPercent+"%";

 status.innerText=
  "YES "+yesPool+" | NO "+noPool;
}
