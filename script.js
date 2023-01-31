

var d = new Date();
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(time);


var elements = new Array(21);
var inputs = document.getElementsByTagName('input');



function load()
{
    for (i = 0; i < elements.length; i++) {
        if (localStorage.getItem(i) != null) {
            inputs[i].value = localStorage.getItem(i);
        }
    }
}

function save() {
    for (i = 0; i < elements.length; i++) {
        if (inputs[i].value != null && inputs[i].value != "") {
            localStorage.setItem(i,inputs[i].value);
        }
    }
}

function gettzdate(){
    var fd = moment().format('YYYY-MM-DDTHH:MM');
    return fd ; 
}
moment().format('MMMM Do YYYY, h:mm a');

moment().format('dddd');

console.log(moment().format('H'))
var currenttime = document.getElementById('currentTime')
currenttime.innerHTML = moment().format('MMMM Do YYYY, h:mm a');
var currentHour = moment().format('H')

var currentHour = ["8","9","10","11","12","13","14","15","16","17","18","19"]
function colorCode(){
if (currentHour > 8){
    $("#8").addClass("past");
} else if (currentHour >= 8 && currentHour < 9) {
    $("8").addClass("present");
} else if (currentHour < 8) {
    $("#8").addClass("future");
}

if (currentHour > 9){
    $("#9").addClass("past");
} else if (currentHour >= 9 && currentHour < 10) {
    $("#9").addClass("present");
} else if (currentHour < 9) {
    $("#9").addClass("future");
}

if (currentHour > 10){
    $("#10").addClass("past");
} else if (currentHour >= 10 && currentHour < 11) {
    $("#10").addClass("present");
} else if (currentHour < 10) {
    $("#10").addClass("future");
}

if (currentHour > 11){
    $("#11").addClass("past");
} else if (currentHour >= 11 && currentHour < 12) {
    $("#11").addClass("present");
} else if (currentHour < 11) {
    $("#11").addClass("future");
}

if (currentHour > 8){
    $("#8").addClass("past");
} else if (currentHour >= 8 && currentHour < 9) {
    $("8").addClass("present");
} else if (currentHour < 8) {
    $("#8").addClass("future");
}

if (currentHour > 8){
    $("#8").addClass("past");
} else if (currentHour >= 8 && currentHour < 9) {
    $("8").addClass("present");
} else if (currentHour < 8) {
    $("#8").addClass("future");
}

} 