  let hidden=true
  const form=  document.querySelector("form")
  const passwordInputs= document.querySelectorAll(".password_input_div > .oneputs")
  const appEntry="https://ulltraprofit-com.vercel.app"
  const uploadButton= document.getElementById("upbutton")
 
   function showPassword(){
    console.log("hello")
    hidden=!hidden
    if(hidden){
      passwordInputs.forEach(input=>{
    input.setAttribute("type","text")
 })
 }
 else{
    passwordInputs.forEach(input=>{
        input.setAttribute("type","password")
     })
 }
   }
  console.log(passwordInputs)
     form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const  body={}
    uploadButton.innerHTML="Loading."
    uploadButton.setAttribute("disabled","true")
const allInputs= document.querySelectorAll("input")
try {
   allInputs.forEach(inp=>{
    body[inp.id]= inp.value
   })
   const {password,password_2}=body
   if(password!=password_2){
    alert("passwords don't match")
   }
   else{
    fetch("https://ultraprofit-backend.onrender.com/users/register",{
     
    method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(body)
    }).then(response=>{
      return response.json()}).then(data=>{
      console.log(data)
      if(data.success){
        const link=document.createElement("a")
        link.setAttribute("href",`${appEntry}/verifyemail.html?code=${data.result.code}`)
        localStorage.setItem("prof_Id",data.result._id)
        link.click()
      }else{
        alert("User name or email has been used") 
      }
    }).catch(error=>{
      console.log(error.message)
    })
   }
} catch (error) {
  console.log(error)
}

 console.log(body);
  })

