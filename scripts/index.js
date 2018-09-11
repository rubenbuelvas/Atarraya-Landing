var data = { email: "" };

var button = document.getElementById("submit");

function sendData() {

    data = { email: String(document.getElementById("emailInput").value) };

    fetch("http://192.168.0.32:80/api/submitEmail", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        alert(String(data.email) + " ha sido registrado exitosamente!\nPronto recibiras noticias de nosotros!")
    });
}

document.getElementById("myForm").addEventListener("keypress", function(event) {
    if(event.which == 13) {
        event.preventDefault();
        sendData();
    }
});