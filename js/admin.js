function keep() {
    let suceds = document.getElementById("suceds")
    setInterval(() => {
        suceds.style.display="none"
    }, 5000);
}
keep()