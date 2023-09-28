const apiEntry="https://ultraprofit-backend.onrender.com"
const token= localStorage.getItem("prof_id")
const reInvestBtn=document.getElementById("reinvestBtn")
const amountInp=document.getElementById("amount")
let loaded=false
let canProceed=false
let userDetails={}
if(!token){
    window.location.assign("create.html")
 
}else{
  fetch(`${apiEntry}/users/tk`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":token
    }
  }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
      loaded=true
      userDetails=data.result
    }
  })
}
reInvestBtn.addEventListener("click",async()=>
{
  if(!loaded){
    console.log("loading ..")
  }
  else{
    console.log(userDetails)
    console.log({amount:amountInp.value,balance:userDetails.earnings})
    const amountValue=amountInp.value
    console.log(amountValue)
if(amountValue<=0){
  alert("amount should be more than 0 ")
}
else if(amountInp.value>userDetails.earnings){
  console.log(userDetails.earnings)
  alert("Insufficient funds")
}
else{
  
  // Removes from  earnings
  const newEarning=userDetails.earnings-amountValue
const  newBalance=userDetails.balance+Number(amountValue)
  await fetch(`${apiEntry}/users/update/${userDetails._id}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      earnings:newEarning,
      balance:newBalance
    })
    
  }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
      canProceed=true
    }
  })
  
  // Adds to investments
  if(canProceed){

  
    
    fetch(`${apiEntry}/transactions/deposit`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "token":token
      },
      body: JSON.stringify({
        wallet_id:"my earnings",
        status:"approved",
        userId:userDetails._id,
        source:"earnings",
        amount:amountInp.value
      })
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.success){
        alert("done")
        window.location.assign("dashboard.html")
        
      }else{
        alert("An error occured")
      }
    })
  }
  
}
  }

})

