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
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999);
     // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied referral link "+copyText.value );
  }