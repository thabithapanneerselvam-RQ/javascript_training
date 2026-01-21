const countId=document.getElementById("count")
const increaseId=document.getElementById("increase")
const decreaseId=document.getElementById("decrease")
const resetId=document.getElementById("reset")

let count=0;
increaseId.addEventListener("click",function(){
  count++;
  countId.textContent=count
})
decreaseId.addEventListener("click",function(){
  count--;
  countId.textContent=count
})
resetId.addEventListener("click",function(){
  count=0;
  countId.textContent=count
})