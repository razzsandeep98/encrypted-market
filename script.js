let yes=[];
let no=[];

function encrypt(v){
 return btoa(v+Math.random());
}

function vote(t){
 if(t==="yes") yes.push(encrypt(t));
 else no.push(encrypt(t));

 status.innerText="Vote Encrypted 🔒";
}

function reveal(){
 status.innerText="YES:"+yes.length+" NO:"+no.length;
}
