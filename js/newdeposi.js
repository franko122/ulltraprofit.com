const body = document.querySelector("body")
const apiEntry="https://ultraprofit-backend.onrender.com"
const adminToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFiN2M3NTcxNTM5M2U2NWUwNjA2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTY1OTk3NX0._0tksCLPPyFcpksw5AfNoMFfG15SXVTPq0MV8x1PzqE"


// creates an element with a classNamer and inner Text

const elemWithClass=(elemName, className,text)=>{
    const elem= document.createElement(elemName)
    elem.setAttribute("class", className)
    if(text){
        elem.innerHTML=text

    }
    return elem
}

// approve functionality
 const approve=(id)=>{
    const  proceed= confirm(`Are you sure you want to approve transaction: ${id}  `)
 if(proceed){
    fetch(`${apiEntry}/transactions/approve/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token":adminToken
        }

    }).then(res=>res.json()).then(data=>{
        console.log(data);
        if(data.success){
            alert("done")
            window.location.reload()
        }
        else{
            alert("An error occured")
        }
    })
 }
}


 // decline functionality
 const decline=(id)=>{
    const  proceed= confirm(`Are you sure you want to delete transaction: ${id}  `)
 }


fetch(`https://ultraprofit-backend.onrender.com/transactions/getdeposits`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":adminToken
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
         data.result.forEach(deposit=>{
            // create a ui for each iteration

            //user nname

           const nameMounty=elemWithClass("div","mounty")
           const nameLabel=elemWithClass("b","","Username")
           const nameValue=elemWithClass("b","",deposit.userId.userName)
           nameMounty.appendChild(nameLabel)
           nameMounty.appendChild(nameValue)

           //transaction amount
           const amountMounty=elemWithClass("div","mounty")
           const amountLabel=elemWithClass("b","","Amount")
           const amountValue=elemWithClass("b","",`$ ${deposit.amount}`)
           amountMounty.appendChild(amountLabel)
           amountMounty.appendChild(amountValue)

           // transaction date
           const dateMounty=elemWithClass("div","mounty")
           const dateLabel=elemWithClass("b","","Date:")
           const dateValue=elemWithClass("b","",new Date(deposit.createdAt).toDateString())
           dateMounty.appendChild(dateLabel)
           dateMounty.appendChild(dateValue)

           // asset type
           const assetMounty=elemWithClass("div","mounty")
           const assetLabel=elemWithClass("b","","Asset:")
           const assetValue=elemWithClass("b","",deposit.source|| "Coin" )
           assetMounty.appendChild(assetLabel)
           assetMounty.appendChild(assetValue)

           
           // wallet id

           const walletMounty=elemWithClass("div","mounty")
           const walletLabel=elemWithClass("b","","Wallet Id:")
           const walletValue=elemWithClass("b","",deposit.wallet_id )
           walletMounty.appendChild(walletLabel)
           walletMounty.appendChild(walletValue)

           // email
           const emailMounty=elemWithClass("div","mounty")
           const emailLabel=elemWithClass("b","","Email:")
           const emailValue=elemWithClass("b","",deposit.userId.email )
           emailMounty.appendChild(emailLabel)
           emailMounty.appendChild(emailValue)
           
           // approveBtn
           const approveBtn= elemWithClass("div","approve","Approve")
           approveBtn.setAttribute("id",deposit._id)
           approveBtn.addEventListener("click",(e)=>{approve(e.target.id)})
           
        // declineBtn
        const declineBtn= elemWithClass("div","decline","Decline")
           declineBtn.setAttribute("id",deposit._id)
           declineBtn.addEventListener("click",(e)=>{decline(e.target.id)})

           
           const depOne=elemWithClass("div","depone")
           depOne.appendChild(nameMounty)
           depOne.appendChild(amountMounty)
           depOne.appendChild(dateMounty)
           depOne.appendChild(assetMounty)
           depOne.appendChild(walletMounty)
           depOne.appendChild(emailMounty)
           depOne.appendChild(approveBtn)
           depOne.appendChild(declineBtn)
             body.appendChild(depOne) 
         })

    }
})