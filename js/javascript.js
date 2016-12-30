window.onload = function() {
    setInterval("hora()", 1000);

}

function hora() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    /* if the length of the time < 10 this get one 0 after 
    ex: Instead 4 seconds it receive 04 seconds/minuts or hours*/
    if (date.getSeconds() < 10) {
        var seconds = "0" + date.getSeconds();
    }
    if (date.getMinutes() < 10) {
        var minutes = "0" + date.getMinutes();
    }
    if (date.getHours() < 10) {
        var hours = "0" + date.getHours();
    };

    var fullHours = hours + ":" + minutes + ":" + seconds;
    var x = document.getElementById("teste").innerText = fullHours;

}