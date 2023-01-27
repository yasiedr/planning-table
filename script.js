String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
Date date = new Date();
System.out.println(dateFormat.format(date));
var elements = new Array(20);
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