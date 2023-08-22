const billel=document.getElementById("amount");
const tipel=document.getElementById("tip");
const btnel=document.getElementById("button");
const total=document.getElementById("totalspan");
function count(){
    const a=billel.value;
    const c=tipel.value;
    const b=a*(1+c/100);
    total.innerText=b.toFixed(2);
}
btnel.addEventListener("click",count);
 
