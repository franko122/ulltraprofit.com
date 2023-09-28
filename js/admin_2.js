const totalInvestments=document.querySelector("#totalInvestments")
const totalEarnings=document.querySelector("#totalEarnings")
const adminToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFiN2M3NTcxNTM5M2U2NWUwNjA2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTY1OTk3NX0._0tksCLPPyFcpksw5AfNoMFfG15SXVTPq0MV8x1PzqE"
const apiEntry="https://ultraprofit-backend.onrender.com"
const  logoutBtn=document.getElementById("logoutBtn")

console.log(totalInvestments)
try {
     fetch(`${apiEntry}/admin/stats`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token":adminToken
        }
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success){
 totalInvestments.innerHTML=data.result.totalBalance           
 totalEarnings.innerHTML=data.result.totalEarnings           
        }
     })
} catch (error) {
    console.log(error)
}
logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("prof_id")
    window.location.assign('index.html')
})