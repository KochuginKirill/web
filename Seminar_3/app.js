function send(){
    let message = document.getElementById("message").value
    if (message == "") {
        document.getElementById("error").innerText = "Ошибка! Поле ввода пустое!";
        document.getElementById('result').value = ""
            }
    else{
    document.getElementById('result').value = "Привет, " + message
    }
}
