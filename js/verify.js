const params= new URLSearchParams(window.location.search)
const code=params.get("code")
const button=document.querySelector("button")
const input=document.querySelector("input")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(code==input.value){
  window.location.assign("https://ulltraprofit-com.vercel.app/dashboard.html")

    }
    else{
        alert("Invalid verification code")
    }
})