const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const completeTask = document.getElementById('completeTask');
const countElement = document.getElementById('count');
let taskCount = 0;
let CompleteTaskCount = 0;

function addTask(){
    if(inputBox.value === ''){
        alert('You should add some task');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        taskCount++;
        countElement.textContent = taskCount;
    }
    inputBox.value = '';
    saveDataList();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        CompleteTaskCount++;
        completeTask.textContent = CompleteTaskCount;
        saveDataList();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        taskCount--;
        countElement.textContent = taskCount;
        saveDataList();
    }
}, false);

function saveDataList(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

displayTask();

