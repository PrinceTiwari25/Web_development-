function setPrompt(text){
document.getElementById("prompt").value = text;
}

function goNext(){

let prompt = document.getElementById("prompt").value;

if(prompt===""){
alert("Enter prompt");
return;
}

localStorage.setItem("prompt", prompt);

window.location.href = "result.html";

}

function goBack(){
window.location.href = "index.html";
}

window.onload = function(){

let img = document.getElementById("image");
let text = document.getElementById("text");

if(!img) return;

let prompt = localStorage.getItem("prompt");

text.innerText = "Prompt: " + prompt;

prompt = prompt.toLowerCase();

if(prompt.includes("cat")){
img.src="images/cat.jpg";
}
else if(prompt.includes("astronaut")){
img.src="images/astronaut.jpg";
}
else if(prompt.includes("cyberpunk")){
img.src="images/cyberpunk.jpg";
}
else if(prompt.includes("lion")){
img.src="images/lion.jpg";
}
else{
text.innerText="No trained AI image for this prompt";
return;
}

img.style.display="block";

}