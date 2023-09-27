 const token= localStorage.getItem("prof_id")
 const body=document.querySelector(".formcontain")
 const apiEntry="https://ultraprofit-backend.onrender.com"
 // creates an element with classnames

 const elemWithClass=(elementName,className,text)=>{
    const  elem=document.createElement(elementName)
    elem.setAttribute("class", className)
    if(text){
        elem.innerHTML=text
    }
    return elem
 }
 
 fetch(`${apiEntry}/transactions/getmywithdrawals`,{
    method:"POST",
    headers:{
        "Content-Type":"application-json",
        "token":token
    }
 }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
      data.result.forEach(withdrawal=>{
        const depOne=elemWithClass("div","depone")
        
        // amount mounty

        const amountMounty=elemWithClass("div","mounty")
        const   amountLabel=elemWithClass("b","","Amount:")
        const   amountValue=elemWithClass("b","",`$ ${withdrawal.amount}`)
        amountMounty.appendChild(amountLabel)
        amountMounty.appendChild(amountValue)

        // date mounty

        const dateMounty=elemWithClass("div","mounty")
        const   dateLabel=elemWithClass("b","","Date:")
        const   dateValue=elemWithClass("b","",new Date(withdrawal.createdAt).toDateString())
        dateMounty.appendChild(dateLabel)
        dateMounty.appendChild(dateValue)

 // source mounty

 const sourceMounty=elemWithClass("div","mounty")
 const   sourceLabel=elemWithClass("b","","Asset:")
 const   sourceValue=elemWithClass("b","",withdrawal.source)
 sourceMounty.appendChild(sourceLabel)
 sourceMounty.appendChild(sourceValue)
 
 // status
 const statusMounty=elemWithClass("div","mounty")
 const statusValue=elemWithClass("b","center",withdrawal.status) 
 statusMounty.appendChild(statusValue)
 
        
        
        depOne.appendChild(amountMounty)
        depOne.appendChild(dateMounty)
        depOne.appendChild(sourceMounty)
        depOne.appendChild(statusMounty)
        body.appendChild(depOne)

      })
    }
 })