let yes=0;
let no=0;

function vote(type){
 if(type==="yes") yes++;
 else no++;
 status.innerText="Vote Encrypted 🔒";
}

function reveal(){
 const total=yes+no;
 const yesPercent=(yes/total)*100;
 resultBar.style.width=yesPercent+"%";
 status.innerText="YES "+yes+" | NO "+no;
}
