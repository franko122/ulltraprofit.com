const token= localStorage.getItem("prof_id")
const amountInp=document.getElementById("amountInp")
const withdrawBtn=document.getElementById("withdrawBtn")
const  apiEntry="https://ultraprofit-backend.onrender.com"
let userDetails={}
let canProceed=false
console.log(withdrawBtn,amountInp)
let loaded=false
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
withdrawBtn.addEventListener("click",async()=>{
    if(!loaded){
        console.log("loading")
    }
    else{
        const amountValue=amountInp.value
        console.log(amountValue)
        if(amountValue<=0){
            alert("Amount must be more than zero")
        }
        else if(amountValue>userDetails.balance){
            alert("Insufficient funds!")
        }
        else{
            
            // withdraw the funds from user
            const newBalance=userDetails.balance-Number(amountValue)
            
            await fetch(`${apiEntry}/transactions/withdraw`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "token":token
                },
                body:JSON.stringify({amount:amountValue,wallet_id:userDetails.wallet_id,source:"investments"})
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                if(data.success){
                    console.log(data.result)
                    canProceed=true
                }else{
                    alert("An error occured ")
                }
            })

            //  remove funds
            
            if(canProceed)
            fetch(`${apiEntry}/users/update/${userDetails._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({balance:newBalance})
            }).then(res=>res.json()).then((data)=>{
                if(data.success){
                    alert("Your application has been sent successfully")
                    window.location.assign('dashboard.html')
                }else{

                }
            })
        }
    }
})