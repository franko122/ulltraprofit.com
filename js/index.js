const id=localStorage.getItem("prof_Id")
if(id){
    window.location.assign(`dashboard.html?profid=${id}`)
}  