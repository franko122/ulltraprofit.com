const form = document.querySelector("form")
const input=document.querySelector("input")
const apiEntry="https://ultraprofit-backend.onrender.com"

const sendInstructions=()=>{
    try{
        fetch(`${apiEntry}/users/sendlink`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:input.value})
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.success){
                alert("we sent you an email")
                
                window.location.assign("login.html")
            }else{
                alert("We couldn't find any user with this email ")
            }
            
        })
    }catch(error){
        console.log(error)
    }

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendInstructions()
})