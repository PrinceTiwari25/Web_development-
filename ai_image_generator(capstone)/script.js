const btn = document.getElementById("generate")
const gallery = document.getElementById("gallery")

btn.onclick = async () => {

let prompt = document.getElementById("prompt").value
let size = document.getElementById("size").value
let count = document.getElementById("count").value

gallery.innerHTML = ""

for(let i=0;i<count;i++){
let img = document.createElement("img")
img.src = "loading.gif"
gallery.appendChild(img)
}

let response = await fetch("https://api.openai.com/v1/images/generations",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},
body:JSON.stringify({
prompt:prompt,
n:parseInt(count),
size:size
})
})

let data = await response.json()

gallery.innerHTML = ""

data.data.forEach(obj=>{
let img = document.createElement("img")
img.src = obj.url
gallery.appendChild(img)
})

}