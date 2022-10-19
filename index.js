const input = document.getElementById('input')
const addedTask = document.getElementById('addedTask')
const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', addTask) 

function addTask() {
    if (input.value != '') {
        
        addedTask.classList.add('unhide')
        addedTask.innerHTML += 
        `
            <div class="flex">
                <p class="added-text">${input.value}</p>
                <button class="delete-btn">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `  
        input.value = ''
        let currentTasks = document.getElementsByClassName('delete-btn')
        for (let task of currentTasks) {
            task.onclick = function() {
                task.parentElement.remove()
            }
        }
        let doneTask = document.getElementsByClassName('added-text')
        for (let done of doneTask) {
            done.onclick = function() {
                done.classList.toggle('line-through')
            }
        }
    }
    else {
        alert("Please add a task first.")
    }
}