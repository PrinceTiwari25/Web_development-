const API="http://localhost:3000/tasks";

async function loadTasks(){
let res=await fetch(API);
let data=await res.json();
showTasks(data);
}

async function addTask(){
let title=document.getElementById("title").value;
let priority=document.getElementById("priority").value;
if(title=="" || title.length>50) return;

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title,priority})
});

document.getElementById("title").value="";
loadTasks();
}

function showTasks(tasks){
let list=document.getElementById("taskList");
list.innerHTML="";

let completed=0;

tasks.forEach(t=>{
if(t.isDone) completed++;

let li=document.createElement("li");
li.className=t.isDone?"completed":"";

li.innerHTML=`
<input type="checkbox" ${t.isDone?"checked":""} onchange="toggle(${t.id})">
${t.title} 
<span class="badge-${t.priority.toLowerCase()}">${t.priority}</span>
<button onclick="editTask(${t.id})">Edit</button>
<button onclick="del(${t.id})">Delete</button>
`;

list.appendChild(li);
});

document.getElementById("counter").innerText=`${completed} / ${tasks.length}`;
}

async function toggle(id){
await fetch(API+"/"+id+"/status",{method:"PATCH"});
loadTasks();
}

async function del(id){
await fetch(API+"/"+id,{method:"DELETE"});
loadTasks();
}

async function editTask(id){
let title=prompt("New title");
let priority=prompt("Priority Low/Medium/High");
await fetch(API+"/"+id,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title,priority})
});
loadTasks();
}

async function filterTasks(type){
let res=await fetch(API);
let data=await res.json();

if(type=="active") data=data.filter(t=>t.isDone==0);
if(type=="completed") data=data.filter(t=>t.isDone==1);

showTasks(data);
}

loadTasks();