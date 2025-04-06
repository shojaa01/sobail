// var date = new Date();
// var hours = date.getHours;
// if(hours >= 8 && hours <=17){
//     //code
// }
// else{
//     //code
// }

window.onload = function () {
    themeChanger();
}

function themeChanger() {
    var today = new Date();
    var currentHour = today.getHours();
    var darkThemeHours = Array(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    if (darkThemeHours.includes(currentHour)) {
        // console.log("باز"); 
        document.getElementById("OpenOrClods").innerHTML = "باز";
    }
    else {
        // console.log("بسته");
        document.getElementById("OpenOrClods").innerHTML = "بسته";
    }
}

