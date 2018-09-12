var data = { email: "" };

var button = document.getElementById("submit");


button.addEventListener("click", function(event) {
    data = { email: String(document.getElementById("emailInput").value) };
	//console.log(data);

    fetch("http://atarraya.eastus.cloudapp.azure.com/api/submitEmail", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        alert(String(data.email) + " ha sido registrado exitosamente!\nPronto recibiras noticias de nosotros!")
    });
});