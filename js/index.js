const id=localStorage.getItem("prof_id")
console.log(id)
if(id){
    window.location.assign(`dashboard.html`)
}  