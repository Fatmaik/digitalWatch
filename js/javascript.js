window.onload = function() {
    setInterval("hora()", 1000);

}

function hora() {
    var date = new Date();
    var hours = date.getHours();
    var minuts = date.getMinutes();
    var second = date.getSeconds();
    var fullHours = hours + ":" + minuts + ":" + second;

    var x = document.getElementById("teste").innerText = fullHours;
}