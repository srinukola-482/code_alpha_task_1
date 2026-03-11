
function dis(val){
document.getElementById("display").value+=val;
}

function solve(){
let x=document.getElementById("display").value;
let y=eval(x);
document.getElementById("display").value=y;
}

function clr(){
document.getElementById("display").value="";
}

function back(){
let x=document.getElementById("display").value;
document.getElementById("display").value=x.slice(0,-1);
}

