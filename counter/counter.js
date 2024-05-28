const counterlabel=document.getElementById("counterlabel");
const increaseb=document.getElementById("increaseb");
const decreaseb=document.getElementById("decreaseb");
const resetb=document.getElementById("resetb");
let count=0;
increaseb.onclick=function(){
    count++;
    counterlabel.textContent=count;
}
decreaseb.onclick=function(){
    count--;
    counterlabel.textContent=count;
}
resetb.onclick=function(){
    count=0;
    counterlabel.textContent=count;
}