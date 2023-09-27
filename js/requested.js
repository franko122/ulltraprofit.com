const token= localStorage.getItem("prof_id")
const body=document.querySelector(".formcontain")
const adminToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFiN2M3NTcxNTM5M2U2NWUwNjA2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTY1OTk3NX0._0tksCLPPyFcpksw5AfNoMFfG15SXVTPq0MV8x1PzqE"
console.log(token)
const elemWithClass=(elementName,className,text)=>{
    const  elem=document.createElement(elementName)
    elem.setAttribute("class", className)
    if(text){
        elem.innerHTML=text
    }
    return elem
 }

  // approve transaction

 const approve=(id)=>{
 const proceed=confirm(`Are you sure you want to approve transaction ${id}`)
 if(proceed){
    fetch(`${apiEntry}/transactions/approve/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token":adminToken
        }
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success){
            alert("done")
            window.location.reload()
        }
    })
 }
 }

  //decline transaction
 const decline=(id)=>{
    const proceed=confirm(`Are you sure you want to decline transaction ${id}`)
    }
   


const apiEntry="https://ultraprofit-backend.onrender.com"
fetch(`${apiEntry}/transactions/getwithdrawals`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":adminToken
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        data.result.filter(withdrawal=>withdrawal.status=="pending").forEach(withdrawal=>{
            
            
            //  name field

            const  nameMounty=elemWithClass("div","mounty")
            const  nameLabel=elemWithClass("b","","User Name:") 
            const  nameValue=elemWithClass("b","",withdrawal.userId.userName)
            nameMounty.appendChild(nameLabel) 
            nameMounty.appendChild(nameValue) 


            //  amount field

            const  amountMounty=elemWithClass("div","mounty")
            const  amountLabel=elemWithClass("b","","Amount:") 
            const  amountValue=elemWithClass("b","",`$ ${withdrawal.amount}`)
            amountMounty.appendChild(amountLabel) 
            amountMounty.appendChild(amountValue) 

            //  walletId field

            const  walletIdMounty=elemWithClass("div","mounty")
            const  walletIdLabel=elemWithClass("b","","walletId:") 
            const  walletIdValue=elemWithClass("b","",withdrawal.userId.wallet_id)
            walletIdMounty.appendChild(walletIdLabel) 
            walletIdMounty.appendChild(walletIdValue) 

             //  email field

             const  emailMounty=elemWithClass("div","mounty")
             const  emailLabel=elemWithClass("b","","Email:") 
             const  emailValue=elemWithClass("b","",withdrawal.userId.email)
             emailMounty.appendChild(emailLabel) 
             emailMounty.appendChild(emailValue) 

               //  date field

               const  dateMounty=elemWithClass("div","mounty")
               const  dateLabel=elemWithClass("b","","Date:") 
               const  dateValue=elemWithClass("b","",new Date(withdrawal.createdAt).toDateString())
               dateMounty.appendChild(dateLabel) 
               dateMounty.appendChild(dateValue) 
   
             //  asset field

             const  assetMounty=elemWithClass("div","mounty")
             const  assetLabel=elemWithClass("b","","Asset:") 
             const  assetValue=elemWithClass("b","",withdrawal.source)
             assetMounty.appendChild(assetLabel) 
             assetMounty.appendChild(assetValue) 

              //   approve button
        
              const approveBtn=elemWithClass("button","greenBtn","Approve")
              approveBtn.addEventListener("click",()=>{
                approve(withdrawal._id)
              })

              // decline button
              const declineBtn=elemWithClass("button","greenBtn red","Approve")
              
              declineBtn.addEventListener("click",()=>{
                decline(withdrawal._id)
              })

 





            const depOne=elemWithClass("div","depone")
            depOne.appendChild(nameMounty)
            depOne.appendChild(amountMounty)
            depOne.appendChild(walletIdMounty)
            depOne.appendChild(emailMounty)
            depOne.appendChild(dateMounty)
            depOne.appendChild(assetMounty)
            depOne.appendChild(approveBtn)
            // depOne.appendChild(declineBtn)

            body.appendChild(depOne)
        })
    }
}) 