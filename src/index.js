import './style.css';

const tasks = [
  { description: 'set up webpack', completed: true, index: 1 },
  { description: 'set up linters', completed: true, index: 2 },
  { description: 'create project', completed: false, index: 3 },
  { description: 'push changes', completed: false, index: 4 },
];

const loadTasks = () => {
  const toDoList = document.querySelector('.items');
  tasks.sort((a, b) => a.index - b.index).map((el) => {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `<label> <input type="checkbox"/> ${el.description} </label> <i class="fa fa-ellipsis-v move"></i>`;
    toDoList.appendChild(task);
    return null;
  });
};

window.addEventListener('load', () => {
  loadTasks();
});