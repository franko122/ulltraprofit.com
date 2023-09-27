const passwordInp= document.getElementById("password")
const userNameInp= document.getElementById("userName")
const appEntry="ulltraprofit.com"
const apiEntry="https://ultraprofit-backend.onrender.com"
const form=document.querySelector("form")
const button=document.querySelector("button")
console.log(button)

const login=()=>{
    try {
      button.setAttribute("disabled",true)
      button.innerHTML="Loading .."
        const userName=userNameInp.value
        const password=passwordInp.value
      fetch(`${apiEntry}/users/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({userName,password})
      }).then(res=>res.json()).then(data=>{
        button.setAttribute("disabled",false)
        button.innerHTML="Sign in"
        if(data.success){

          console.log(data.result)
            localStorage.setItem("prof_id", data.result.tk)
            window.location.assign("/index.html")
        }
        else{
            alert("Invalid user name or password")
        }
      })    
    } catch (error) {
        console.log(error)
    }
    
}
form.addEventListener("submit",(e)=>{
e.preventDefault()    
 login()
})
