const     password= document.getElementById("password")
const     password_2= document.getElementById("password_2")
const form =document.querySelector("form")
const apiEntry="https://ultraprofit-backend.onrender.com"
const params= new URLSearchParams(window.location.search)

const profid= params.get("profid")
const userId=profid.split("style")[0]

const resetPassword=()=>{
 const newPassword=password.value
 const newPassword_2=password_2.value
 if(newPassword!=newPassword_2){
        alert("Passwords don't match")
 }else{
    if(profid){

        fetch(`${apiEntry}/users/update/${userId}`,
 {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({password})
 }
 ).then(res=>res.json()).then(data=>{
     console.log(data)
    if(data.success){
     alert("Detail updated successfully")
    }
    else{
        alert("An error occured, try again later")
    }
 })
    }
    else{
        alert("PLease Check your email for instructions")
    }
 
 }

}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    resetPassword()
})