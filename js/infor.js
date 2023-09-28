const refLink=document.getElementById("reflink")
const dateVal= document.getElementById("dateValue")
const email=document.getElementById("email")
const nameInp=document.getElementById("name")
const walletInp=document.getElementById("walletId")
const apiEntry="https://ultraprofit-backend.onrender.com"
const token= localStorage.getItem("prof_id")
if(!token){
    window.location.assign("index.html")

}
else{
    fetch(`${apiEntry}/users/tk`,{
        method:"post",
        headers:{
            "Content-Type":"application-json",
            "token":token
        }
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success){
            dateVal.innerHTML=new Date(data.result.createdAt).toDateString()
            email.innerHTML=data.result.email
            nameInp.innerHTML=data.result.userName
            walletInp.value=data.result.wallet_id
        }
    })
}