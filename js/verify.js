const params= new URLSearchParams(window.location.search)
const code=params.get("code")
alert(`your code is ${code}`)