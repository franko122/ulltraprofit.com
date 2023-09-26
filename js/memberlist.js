// function that  creates an element with a className and returns 

const adminToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFiN2M3NTcxNTM5M2U2NWUwNjA2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTY1OTk3NX0._0tksCLPPyFcpksw5AfNoMFfG15SXVTPq0MV8x1PzqE"
const apiEntry="https://ultraprofit-backend.onrender.com"

const createElement=(elementName,className="")=>{
    const thisElement= document.createElement(elementName)
     thisElement.setAttribute("class",className)
     return thisElement
}

// my deletUserFunction

const deleteUser=(e)=>{
    const id=e.target.id
    const proceed=confirm(`Are you sure you want to delete user ${id}`)
    if(proceed){
        fetch(`${apiEntry}/users/delete/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "token":adminToken
            }
        }).then(res=>res.json()).then(data=>{
            if(data.success){
                alert(data.result)
                window.location.reload()
            }

        })
    }
}
const noOfMembers= document.getElementById("noOfMembers")
const body=document.querySelector("body")
console.log(noOfMembers)
try{
 fetch(`${apiEntry}/users`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "token":adminToken
    }
 }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        noOfMembers.innerHTML=data.result.length
        data.result.forEach(user=>{
            const  userContainer= document.createElement("div")
            const mounty1=createElement("div","mounty")
            const mountyChild1=createElement("b")
            mountyChild1.innerHTML="User name:"
            mounty1.appendChild(mountyChild1)
            const mountyChild2=createElement("b")
            mountyChild2.innerHTML=user.userName
            mounty1.appendChild(mountyChild2)
            // mounty2
            const mounty2=createElement("div","mounty")
            const mounty2Child1=createElement("b")
            mounty2Child1.innerHTML="Email:"
            mounty2.appendChild(mounty2Child1)
            const mounty2Child2=createElement("b")
            mounty2Child2.innerHTML=user.email
            mounty2.appendChild(mounty2Child2)
            userContainer.appendChild(mounty1)
            userContainer.appendChild(mounty2)

            // done with the mounty classes
        const detail1=createElement("div","detail")
        detail1.innerHTML="Wallet address"
        
        //detail 2

        const detail2=createElement("div","detail bold")
        detail2.innerHTML=user.wallet_id

            userContainer.setAttribute("class","depone")

            //detail 3
            const detail3=createElement("div","detail")
            detail3.innerHTML="Date"
            //detail 4
            const detail4=createElement("div","detail")
            detail4.innerHTML= new Date(user.createdAt).toDateString()
            //button
            const button=createElement("div","button bold")
            button.setAttribute("id", user._id)
            button.addEventListener("click",e=>{deleteUser(e)})
            button.innerHTML="Delete User"



userContainer.appendChild(detail1)
userContainer.appendChild(detail2)
userContainer.appendChild(detail3)
userContainer.appendChild(detail4)
userContainer.appendChild(button)
            body.appendChild(userContainer)
        })
    }
 })
}
catch(error){
    console.log(error)

}