const code=localStorage.getItem("code")
const button=document.querySelector("button")
const input=document.querySelector("input")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(code==input.value){
  window.location.assign("/dashboard.html")

    }
    else{
        alert("Invalid verification code")
    }
})