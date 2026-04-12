// ✅ Set suggestion text
function setPrompt(text){
    document.getElementById("prompt").value = text;
}

// ✅ Go to result page
function goNext(){

    let prompt = document.getElementById("prompt").value;

    if(prompt === ""){
        alert("Enter prompt");
        return;
    }

    localStorage.setItem("prompt", prompt);

    window.location.href = "result.html";
}

// ✅ Back button
function goBack(){
    window.location.href = "index.html";
}

// ✅ Load result page
window.onload = function(){

    let img = document.getElementById("image");
    let text = document.getElementById("text");

    if(!img) return;

    let prompt = localStorage.getItem("prompt");

    text.innerText = "Prompt: " + prompt + "\nGenerating AI Image...";

    img.style.display = "block";

    // 🔥 FREE AI IMAGE API (NO BACKEND NEEDED)
    img.src = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt);
};