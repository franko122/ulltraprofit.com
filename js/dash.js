function paraOne(){
    let lose = document.getElementById("lose")
    let mani = document.getElementById("mani")
    let three = document.getElementById("thre")
    let suced = document.getElementById("suced")
    let dexgos = document.getElementById("dexgos");
    setInterval(() => {
        dexgos.style.display="none"
    }, 3000);
    lose.addEventListener("click",()=>{
        mani.style.height="0px"
        mani.style.transition="1s"
        mani.style.overflow="hidden"
    })
    three.addEventListener("click",()=>{
      mani.style.height="100vh"
      mani.style.transition="1s"
      mani.style.display="block"
    })
    setInterval(() => {
        suced.style.display="none"
    }, 6000);
}
paraOne();

function buy() {
    alert("Chart with live suppport to buy coin")
} 
function sell() {
    alert("Chart with live suppport to sell coin")
}  