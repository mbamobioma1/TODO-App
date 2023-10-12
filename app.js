let addTask = document.querySelector(".addTask");
let closeTask = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let submit = document.getElementById("submit");

let form = document.getElementById("form");
let inputText = document.getElementById("inputText");
let inputDate = document.getElementById("inputDate");
let description = document.getElementById("description");
let msg = document.getElementById("msg");


//pop up modal
addTask.addEventListener("click", ()=>{
    overlay.classList.add("popUp");
})
closeTask.addEventListener("click", ()=>{
    overlay.classList.remove("popUp");
})
//upload task
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button was clicked")
    formValidation()
})

submit.addEventListener("click", ()=>{
    if(inputText.value ===""){
        overlay.classList.add("popUp");
    }else{
        overlay.classList.remove("popUp");
    }
})

let formValidation = ()=>{
    if(inputText.value === ""){
        console.log("failure")
        msg.innerHTML = "task cannot be blank"
    }else{
        console.log("success")
        acceptData();
        msg.innerHTML = ""
    }
}

let data = {};

let acceptData = ()=>{
    data["text"] = inputText.value;
    data["date"] = inputDate.value;
    data["desc"] = description.value;
    console.log(data);
    uploadTask();
}

let uploadTask = ()=>{
    task.innerHTML +=
    `<div>
    <p>${data.text}</p>
    <p>${data.date}</p>
    <p>${data.desc}</p>
    <span class="option">
        <i onClick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteTask(this)" class="fa-solid fa-trash-can"></i>
    </span>
</div>`
resetForm();
}

let resetForm = ()=>{
inputText.value = ""
description.value = ""
inputDate.value = ""
}

let deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
}

let editTask = (e)=>{
    let currentTask = e.parentElement.parentElement;
    inputText.value = currentTask.children[0].innerHTML;
    description.value = currentTask.children[2].innerHTML;
    inputDate.value = currentTask.children[3].innerHTML;
    e.parentElement.parentElement.remove();
    overlay.classList.toggle("popUp");
}