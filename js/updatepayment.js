const token= localStorage.getItem("prof_id")
const walletIdInp= document.getElementById("walletIdInp")
const updateBtn= document.getElementById("updateBtn")
let loaded= false
let userDetails={}
const apiEntry="https://ultraprofit-backend.onrender.com"
fetch(`${apiEntry}/users/tk`,{
    method:"post",
    headers:{
        "Content-Type":"application/json",
        "token":token
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        loaded=true;
        userDetails=data.result
    }
})
updateBtn.addEventListener("click",()=>{
    const walletIdVal= walletIdInp.value
    const canProceed=confirm(`Are you sure you want to update your wallet id to :${walletIdVal}?`)
    alert(walletIdVal)


if(loaded&&canProceed){
// disable buttons temporarily
updateBtn.innerHTML="Loading ..."
updateBtn.setAttribute("disabled",true)

//  update users wallet id if userDetails has loaded
 fetch(`${apiEntry}/users/update/${userDetails._id}`,{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({wallet_id:walletIdVal})
 }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        alert("Updated successfully")
        window.location.assign("dashboard.html")
    }else{
        // ree enable buttons temporarily
        alert("An error occured, please try agaim")
updateBtn.innerHTML="Loading ..."
updateBtn.setAttribute("disabled",false)
        
    }
 })

}
})
console.log(token)