

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

