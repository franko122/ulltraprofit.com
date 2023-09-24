const passwordInp= document.getElementById("password")
const userNameInp= document.getElementById("userName")
const appEntry="https://ulltraprofit-com.vercel.app"
const apiEntry="https://ultraprofit-backend.onrender.com"
const form=document.querySelector("form")

const login=()=>{
    try {
        const userName=userNameInp.value
        const password=passwordInp.value
      fetch(`${apiEntry}/users/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({userName,password})
      }).then(res=>res.json()).then(data=>{
          
        if(data.success){
            localStorage.setItem("prof_Id", data.result._id)
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
