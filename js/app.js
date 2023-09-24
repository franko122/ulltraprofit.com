function startCode(){
    let firstcode = document.getElementById("firstgo");
    let goone = document.getElementById("goone");
    let comeback = document.getElementById("comeback");
    let anogo = document.getElementById("anogo");
    let backer = document.getElementById("backer");
    let backli = document.getElementById("backli"); 
    let onelite = document.getElementById("onelite"); 
    let twolite = document.getElementById("twolite");  
    let whiter = document.getElementById("whiter");  
    let click = document.getElementById("click");  
    let lack = document.getElementById("lack");  
    let anocome = document.getElementById("anocome");  
    let trede = document.getElementById("trede") 
    let dexgo = document.getElementById("dexgo") 
    let firt = document.getElementById("firt")
    let sec = document.getElementById("sec")
    let mains = document.getElementById("mains")  
   if(firt){
    firt.addEventListener("click",()=>{
      mains.style.height="400px"
      firt.style.display="none"
      sec.style.display="block"
  }) 
   }
   if(sec){
    sec.addEventListener("click",()=>{
      mains.style.height="0px"
      firt.style.display="block"
      sec.style.display="none"
    })    
   }
    
   if(trede){
    setTimeout(() => {
      trede.style.width="100%" 
    },500);  
   }
   
    
     setTimeout(() => {
      dexgo.style.width="0%" 
    },3000);
    goone.addEventListener("click",() =>{
      firstcode.style.display="none"
      comeback.style.display="flex" 
      onelite.style.backgroundColor=" #fd961a"
      twolite.style.backgroundColor="#fd971a6c"
    })
    anogo.addEventListener("click",()=>{
      comeback.style.display="none"
      firstcode.style.display="flex"
      twolite.style.backgroundColor="#fd961a"
      onelite.style.backgroundColor="#fd971a6c"
    }) 
    backli.addEventListener("click",()=>{
      comeback.style.display="none"
      firstcode.style.display="flex"
      twolite.style.backgroundColor="#fd961a"
      onelite.style.backgroundColor="#fd971a6c"
    })
    backer.addEventListener("click",()=>{
      comeback.style.display="flex"
      firstcode.style.display="none" 
      onelite.style.backgroundColor="#fd961a"
      twolite.style.backgroundColor="#fd971a6c"
    })
    click.addEventListener("click",()=>{
      lack.style.width="100%"
      whiter.style.width="87%" 
      anocome.style.display="block" 
      click.style.display="none"
    })  
    anocome.addEventListener("click",()=>{ 
      whiter.style.width="0%"  
      click.style.display="block"
      lack.style.width="0%"
    })
  }
  startCode()
  function live() { 
        let lives = document.getElementById("lives")
        lives.addEventListener("click",()=>{
          alert("Online classes. Contact live chat ")
        })
  } 
  live()    