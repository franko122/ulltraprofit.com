const prof_Id=localStorage.getItem("prof_Id")
const UserNameElement=document.getElementById("userName")
const bal=document.getElementById("bal")
const earnings=document.getElementById("earnings")
console.log(UserNameElement)
try {
    let userDetails={}
const newUser=fetch(`https://ultraprofit-backend.onrender.com/users/${prof_Id}`).then(res=>res.json()).then(data=>{
    if(data.success){
        UserNameElement.innerHTML=data.result.userName;
        bal.innerHTML=data.result.balance
        earnings.innerHTML=data.result.earnings
        return data
    }
    
})
console.log(newUser)
} catch (error) {
    console.log(error)
}
