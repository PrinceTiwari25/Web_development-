function welcome() {
    alert("Thank you for visiting!");
}

function submitForm(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message submitted successfully";
}
