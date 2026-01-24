const form=document.querySelector("form");
const taskInput=document.getElementById("taskInput");
const tableBody=document.querySelector("#taskTable tbody");
const searchInput=document.getElementById("searchTask");
const searchBtn=document.getElementById("searchBtn")

const ulList=document.getElementById("completedList");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const taskName=taskInput.value.trim();
    if(taskName=="") return;

    const row=document.createElement("tr")

    const doneColumn=document.createElement("td")

    const checkbox=document.createElement("input")
    checkbox.type="checkbox";

    const ulColumn=document.createElement("li")
    ulColumn.textContent=taskName

    checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            row.style.textDecoration="line-through";
            ulList.appendChild(ulColumn)
        }else{
            row.style.textDecoration="none";
            ulColumn.remove(ulColumn)
        }
        row.style.opacity=checkbox.checked?0.6:1;
    })

    doneColumn.appendChild(checkbox);

    const taskColumn=document.createElement("td")
    taskColumn.textContent=taskName
    taskColumn.style.color="palevioletred"

    const dateColumn=document.createElement("td")
    const todayDate=new Date().toDateString();
    dateColumn.textContent=todayDate;
    dateColumn.style.color="palevioletred"


    const actionColumn=document.createElement("td");
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.style.padding = "0.5rem 1rem";
    deleteBtn.style.cursor="pointer";

    deleteBtn.addEventListener("click", ()=>{
        ulColumn.remove()
        row.remove();
    })

    actionColumn.appendChild(deleteBtn)
    actionColumn.style.color="palevioletred"

    row.appendChild(doneColumn)
    row.appendChild(taskColumn)
    row.appendChild(dateColumn)
    row.appendChild(actionColumn)

    tableBody.appendChild(row)

    taskInput.value="";    

})


searchBtn.addEventListener("click", filterTasks);

function filterTasks() {
  const searchValue = searchInput.value.toLowerCase();
  const rows = tableBody.querySelectorAll("tr");

  rows.forEach(row=>{
    const taskText=row.children[1].textContent.toLowerCase();
    row.style.display=taskText.includes(searchValue) ? "" : "none";
  });
}




