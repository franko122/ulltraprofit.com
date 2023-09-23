  let hidden=true
  const form=  document.querySelector("form")
  const passwordInputs= document.querySelectorAll(".password_input_div > .oneputs")
 
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
    mode:"no-cors",  
    method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(body)
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      if(data.success){
        const link=document.createElement("a")
        alert(data.result.code)
        link.setAttribute("href",`./verifyemail.html?code=${data}`)
        link.click()
      }else{
        alert("User name or email has been used") 
      }
    })
   }
} catch (error) {
  console.log(error)
}
 
 console.log(body);
  })

