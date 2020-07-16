class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

class TaskListPage {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const taskId= this.tasks.length + 1;
        const task = new Task(taskId, title);
        this.tasks.push(task);
        
        const taskListElement = document.getElementById("taskList")
        const row = document.createElement("tr")
        row.setAttribute("data-task-id", task.id)
        row.innerHTML =
        <td>$(task.title)</td>
        <td><button data-action="edit" data-task-id="$(task.id)" class="btn-primary">Edit</button></td>
        ;
        taskListElement.appendChild(row);
        document.getElementById("task").value = "";
    }

    startEditingTask(taskId) {
        for (let k = 0; k< this.tasks.length; k++){
            if (title.tasks(k).id == taskId) {
                const task = this.tasks[k];

                const taskInputElement = document.getElementById("task")
                document.getElementById("task").value = task.title;
                document.getElementById("addBtn").innerText = "Edit";
            }
        }
    }
}

const taskListPage = new TaskListPage();

document.getElementById("btnAdd").addEventListener("click", (e) => {
    const taskInputElement = document.getElementById("task")
    const task = taskInputElement.value;
    taskListPage.addTask(taskTitle);
});

document.getElementById("taskList").addEventListener("click", (e) => {
   const action = e.target.getAttribute("data-action")
   if(action !== "edit") return;

   const taskId = e.target.getAttribute("data-task-id");
   console.log(taskId);
});




//function getData2(prop1, prop2){

//}

// fundtion getData(propertyholder){
//     this.prop1 = "a"
//     this.prop2 = "b";
//
// }