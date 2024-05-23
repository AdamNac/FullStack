//Time and Date

function updateClock(){
    let date = new Date();
    document.querySelector("p.dateTime").innerHTML = date;
    setTimeout(updateClock,1000);
}
updateClock();//call once then it will go back into the function




