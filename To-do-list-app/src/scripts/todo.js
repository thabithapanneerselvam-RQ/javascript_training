import ICONS from "../scripts/icons.js";

const form=document.querySelector("form");
const tableBody=document.querySelector("#taskTable tbody");
const searchInput=document.getElementById("searchTask");
const searchBtn=document.getElementById("searchBtn")
const ulList=document.getElementById("completedList");

const modal=document.getElementById("taskModal");
const openModalBtn=document.getElementById("openModalBtn");
const closeModalBtn=document.getElementById("closeModalBtn");
const modalForm=document.getElementById("modalForm");

const taskName=document.getElementById("modalTaskName");
const time=document.getElementById("modalTime");
const desc=document.getElementById("modalDesc");

const filterDateInput=document.getElementById("filterDate");

const sortBtn=document.getElementById("sortTaskBtn");
let isAscending=true;

const searchIconImg = document.getElementById("searchIcon");
searchIconImg.src = ICONS.search;



function addTaskToTable(taskText, timeText, descriptionText){
  const row = document.createElement("tr");

  const doneColumn = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  doneColumn.appendChild(checkbox);

  const taskColumn = document.createElement("td");
  taskColumn.innerHTML = `
    <strong>${taskText}</strong><br>
    <small>${descriptionText || ""}</small>
  `;
  taskColumn.style.color = "palevioletred";

  const dateColumn = document.createElement("td");
  const today = new Date().toISOString().split("T")[0];

  
  dateColumn.textContent = today;
  dateColumn.dataset.date = today; 
  dateColumn.style.color = "palevioletred";

  const actionColumn = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", ()=>{
    ulColumn.remove()
    row.remove();
  });

  actionColumn.appendChild(deleteBtn);

  const ulColumn = document.createElement("li");
  ulColumn.textContent = taskText;

  checkbox.addEventListener("change", ()=>{
    if (checkbox.checked){
        row.style.textDecoration = "line-through";
        ulList.appendChild(ulColumn);
        row.style.opacity = 0.6;
    }else{
        row.style.textDecoration = "none";
        ulColumn.remove();
        row.style.opacity = 1;
    }
});

  row.append(doneColumn, taskColumn, dateColumn, actionColumn);
  tableBody.appendChild(row);
}



searchBtn.addEventListener("click", filterTasks);

function filterTasks(){
  const searchValue=searchInput.value.toLowerCase();
  const rows=tableBody.querySelectorAll("tr");

  rows.forEach(row=>{
    const taskText=row.children[1].textContent.toLowerCase();
    row.style.display=taskText.includes(searchValue) ? "" : "none";
  });
  searchInput.value = "";
}


openModalBtn.addEventListener("click", ()=>{
    modal.style.display="flex";
})

closeModalBtn.addEventListener("click", ()=>{
    modal.style.display="none";
})

modal.addEventListener("click", (e)=>{
    if(e.target===modal){
        modal.style.display="none";
    }
})

modalForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const taskText=taskName.value.trim();
    const timeText=time.value;
    const descriptionText=desc.value.trim();

    if(taskText=="") {
        alert("Task name cannot be empty");
        return;
    }

    addTaskToTable(taskText, timeText, descriptionText);

    modalForm.reset();
    modal.style.display="none";
})


filterDateInput.addEventListener("change", filterByDate);

function filterByDate(){
    const selectedDate=filterDateInput.value;
    const rows=tableBody.querySelectorAll("tr")

    rows.forEach(row=>{
        const rowDate=row.children[2].dataset.date;
        row.style.display=rowDate===selectedDate?"":"none";
        
    })
}




sortBtn.addEventListener("click", ()=>{
  const rows=Array.from(tableBody.querySelectorAll("tr"));

  rows.sort((a,b)=>{
    const taskA=a.children[1].querySelector("strong").textContent.trim().toLowerCase();
    const taskB=b.children[1].querySelector("strong").textContent.trim().toLowerCase();

    if(isAscending){
      return taskA.localeCompare(taskB)
    }else{
      return taskB.localeCompare(taskA)
    }
  })

  rows.forEach(row=>tableBody.appendChild(row));

  isAscending=!isAscending;
})