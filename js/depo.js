let conf = document.getElementById("conf")
let onecon = document.getElementById("conone")
let pumpo2 = document.getElementById("pumpo2")
let pumpo= document.getElementById("pumpo") 
let okay = document.getElementById("okay") 
   okay.addEventListener("click",()=>{ 
     pumpo.style.display="none"
    })
  pumpo2.addEventListener("click",()=>{
    pumpo.style.display="flex" 
    pumpo.style.alignItems="center" 
    pumpo.style.justifyContent="center" 
    conf.style.display="none" 
  })
onecon.addEventListener("click",()=>{
    conf.style.display="block" 
})