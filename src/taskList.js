import Task from './task.js';

export default class TaskList {
  constructor(tasks) {
    this.tasks = tasks.map((el) => new Task(el.description, el.completed, el.index));
  }

  show = () => {
    const toDoList = document.querySelector('.items');
    toDoList.innerHTML = '';
    this.tasks.sort((a, b) => a.index - b.index).map((el) => {
      const task = document.createElement('div');
      task.classList.add('task');
      if (el.completed) task.classList.add('completed');
      task.innerHTML = `<input type="checkbox" ${el.completed ? 'checked' : ''} /> <input type='text' value='${el.description}'/>  <i class="fa fa-trash remove"></i>`;
      toDoList.appendChild(task);
      task.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        this.toggleTask(el.index);
      });
      task.querySelector('input[type="text"]').addEventListener('blur', (e) => {
        this.tasks[el.index - 1].description = e.target.value;
        this.save();
        this.show();
      });
      task.querySelector('.remove').addEventListener('click', () => {
        this.removeTask(el.index);
      });
      return null;
    });
  }

  addTask = (task) => {
    task.index = this.tasks.length + 1;
    this.tasks.push(task);
    this.show();
    this.save();
  }

  removeTask = (index) => {
    this.tasks = this.tasks.filter((el) => el.index !== index);
    this.reorderTasks();
    this.show();
    this.save();
  }

  save = () => {
    localStorage.tasks = JSON.stringify(this.tasks);
  }

  reorderTasks = () => {
    this.tasks.map((el, i) => {
      el.index = i + 1;
      return null;
    });
  }
}
