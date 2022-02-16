import TaskList from './taskList.js';
import './style.css';
import Task from './task.js';

const tasks = (localStorage.tasks ? JSON.parse(localStorage.tasks) : []);

const list = new TaskList(tasks);
window.addEventListener('load', () => {
  list.show();
});

const addTask = () => {
  const txt = document.querySelector('.txtNew');
  const description = txt.value;
  if (description === '') {
    alert('Please type your task description');
  } else {
    list.addTask(new Task(description));
    txt.value = '';
  }
};

document.querySelector('.add').addEventListener('click', () => {
  addTask();
});

document.querySelector('.txtNew').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) { // Enter key
    addTask();
  }
});

document.querySelector('.remove').addEventListener('click', () => {
  list.clearCompletedTasks();
});