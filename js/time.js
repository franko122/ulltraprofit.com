function getdays() {
    let times = document.getElementById("times");
    let timer = document.getElementById("timeer");
    let timeer = document.getElementById("timer");
    let twenty = document.getElementById("twenty");
    const getDays = new Date();
    let lays = getDays.getDay(); 
    sep = getDays.getMonth();
    timer.innerHTML = getDays.getDate();
    twenty.innerHTML = getDays.getFullYear(); 
    switch (sep){
        case 0:
            timeer.innerHTML = "1" 
            break;
        case 1:
            timeer.innerHTML = "2"
            break;
        case 2:
            timeer.innerHTML = "3"
            break;
        case 3:
            timeer.innerHTML = "4"
            break;
        case 4:
            timeer.innerHTML = "5"
            break;
        case 5:
            timeer.innerHTML = "6"
            break;
        case 6:
            timeer.innerHTML = "7"
            break;
        case 7:
            timeer.innerHTML = "8"
            break;
        case 8:
            timeer.innerHTML = "9" 
            break;
        case 9:
            timeer.innerHTML = "10"
            break;
        case 10:
            timeer.innerHTML = "11"
            break;
        case 11:
            timeer.innerHTML = "12" 
            break;
    } 
}
getdays();  
