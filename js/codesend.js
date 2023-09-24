const     password= document.getElementById("password")
const     password_2= document.getElementById("password_2")
const form =document.querySelector("form")
const apiEntry="https://ultraprofit-backend.onrender.com"
const params= new URLSearchParams(window.location.search)

const profid= params.get("profid")
console.log("profid",profid)

const resetPassword=()=>{
 const newPassword=password.value
 const newPassword_2=password_2.value
 if(newPassword!=newPassword_2){
        alert("Passwords don't match")
 }else{
 fetch(`${apiEntry}/users`)
 }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    resetPassword()
})