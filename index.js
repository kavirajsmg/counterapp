const counter=document.querySelector(".read");
console.log(counter);

function increment()
{
    var a = Number(counter.textContent);
    a+=1;
    counter.textContent=a;
    if(counter.textContent==0){
        counter.style.color="black";
    }
    else{
    counter.style.color="green";
    }
}
function decrement(){
    var b= Number(counter.textContent);
    b-=1;
    if(b<0){
        counter.textContent=0;
    }
    else{
    counter.textContent=b;
    }
    if(counter.textContent==0){
        counter.style.color="black";
    }
    else{
    counter.style.color="red";
    }
}
function reset(){
    counter.textContent=0;
    counter.style.color="black";
}
