const params= new URLSearchParams(window.location.search)
const ref= params.get("ref")
const form= document.querySelector("form")
const inputs= document.querySelectorAll("input")
const referrer= document.getElementById("referrer")
const body={}
const  passwordInp=document.getElementById("password")
const  password_2Inp=document.getElementById("password_2")
let passwordHidden=true
 const checkBox=document.querySelector(`input[type="checkbox"]`)
 console.log(checkBox)
// show/hide password fields
const showPassword=()=>{
  passwordHidden= !passwordHidden
  if(passwordHidden){
    [passwordInp,password_2Inp].forEach(field=>{
      field.setAttribute("type","text")
    })
    
  }
  else{
    [passwordInp,password_2Inp].forEach(field=>{
      field.setAttribute("type","password")
    })
  }
}

// End of show/hide functionality


// verify  referrrals


if(ref){
  const ref_token= ref.split("-")[1]
  fetch(`https://ultraprofit-backend.onrender.com/users/${ref_token}`,{
    method:"POST",
    headers:{

      "Content-Type":"application/json",
      "token":ref_token
    }
  }).then(res=>res.json().then(data=>{
    console.log(data)
    if(data.success){
     body.referrer= data.result._id
     referrer.setAttribute("placeholder",data.result.userName)
    }
  }))

}

// Finished checking referrals

// when the form is submitted .....

form.addEventListener("submit",e=>{
  e.preventDefault()
  const allInputs=document.querySelectorAll("input")
  allInputs.forEach(inp=>{
    if((inp!=referrer)&&(inp!=checkBox)){
      body[inp.id]=inp.value
    }
  })
  console.log(body)


  if(passwordInp.value!=password_2Inp.value){
    alert("passwords don't match")
  }
  else{

    fetch(`https://ultraprofit-backend.onrender.com/users/register`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.success){
        localStorage.setItem("prof_id",data.result.tk)
        localStorage.setItem("code",data.result.code)
        window.location.assign("./verifyemail")
      }
      else{
        alert("Username or email has been used ")
      }
    })
    
  }
})
// 
