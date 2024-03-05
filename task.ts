let tasks: string[] = [];
let inputName = document.getElementById("taskInput") as HTMLInputElement
let tasklist = document.getElementById("taskList") as HTMLDivElement
let btnValue = document.getElementById('mySubmit') as HTMLInputElement

btnValue.addEventListener("click", ()=>{
    if (inputName.value.length > 0){
        tasks.push(inputName.value);
        inputName.value = '';
        displayTasks(tasks);
        console.log(tasks);
    }
});


const displayTasks = (container: string[]) => {
    let innerContent: string = '';
    for(let i: number = 0; i < tasks.length; i++){
        let newList;
        innerContent += `<div>
        <li>${container [i]}</li>
        <button onclick="editTask(${i})">Edit</button>
        <button onclick="deleteTask(${i})">Completed</button>
        </div>`

    }

    tasklist.innerHTML = innerContent;

}

const editTask = (index: number) => {
    if (inputName.value.length > 0){
        tasks.splice(index, 1, inputName.value);
        displayTasks(tasks);
        inputName.value = '';
    }
}

const deleteTask = (index: number) => {
    tasks.splice(index, 1);
    displayTasks(tasks);
}