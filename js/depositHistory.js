const apiEntry="https://ultraprofit-backend.onrender.com"
 const body=document.querySelector(".formcontain")

 const pendingSvg= document.querySelector(".pending_svg")
 clonedSvg=pendingSvg.cloneNode(true)
 const confirmedSvg= document.querySelector(".confirmed_svg")
 const ElementWithClass=(type,className, text)=>{
    const elem= document.createElement(type)
    elem.setAttribute("class", className)
    if(text){

        elem.innerHTML=text
    }
    return elem
 }

 
 fetch(`${apiEntry}/transactions/getmydeposits`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":localStorage.getItem("prof_Id")
    }
 }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
            data.result.forEach(transaction=>{
                const depOne=ElementWithClass("div","depone")
                const mounty1=ElementWithClass("div","mounty")
                const DateElem= ElementWithClass("b","","Date:")
                const DateValue= ElementWithClass("b","",new Date(transaction.createdAt).toDateString())
                mounty1.appendChild(DateElem)
                mounty1.appendChild(DateValue)
                const mounty2=ElementWithClass("div","mounty")
                const Asset= ElementWithClass("b","","Asset:")
                const assetValue= ElementWithClass("b","",transaction.source?transaction.source:"Coin")
                mounty2.appendChild(Asset)
                mounty2.appendChild(assetValue)

                const pendingMounty= ElementWithClass("div","mounty")
                const pendingText= ElementWithClass("b","red center","Pending")
                pendingMounty.appendChild(pendingText)
                pendingMounty.appendChild(clonedSvg)
                
                
                
                const approvedMounty= ElementWithClass("div","mounty")
                const approvedText= ElementWithClass("b"," green center","Approved")
                approvedMounty.appendChild(approvedText)
                approvedMounty.appendChild(clonedSvg)
                approvedMounty.style.display="none"




                const amountMounty= ElementWithClass("div","mounty")
                const amountText= ElementWithClass("b","","Amount")
                const amountValue= ElementWithClass("b","",`$ ${transaction.amount}`)
                amountMounty.appendChild(amountText)
                amountMounty.appendChild(amountValue)


                const rejectedMounty= ElementWithClass("div","mounty")
                const rejectedText= ElementWithClass("b","red","Rejected")
                rejectedMounty.appendChild(rejectedText)
                rejectedMounty.appendChild(clonedSvg)
                const statusElems={
                    rejected:rejectedMounty,
                    approved:approvedMounty,
                    pending:pendingMounty
                }
               Object.keys(statusElems).forEach(key=>{
                statusElems[key].style.display="none"
               })
                statusElems[transaction.status].style.display="flex";
                // statusElems[transaction.status].style.display="flex"
                
                
                depOne.appendChild(amountMounty)
                depOne.appendChild(mounty1)
                depOne.appendChild(mounty2)
                body.appendChild(depOne)
                depOne.appendChild(approvedMounty)
                depOne.appendChild(rejectedMounty)
                depOne.appendChild(pendingMounty)
            })
        }
    else{

        alert("An error occured, try again! ")
    }
 })