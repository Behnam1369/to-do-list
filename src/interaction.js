import TaskList from './taskList.js';

TaskList.prototype.toggleTask = function toggleTask(i) {
  this.tasks[i - 1].completed = !this.tasks[i - 1].completed;
  this.show();
  this.save();
};

TaskList.prototype.clearCompletedTasks = function clearCompletedTasks() {
  this.tasks = this.tasks.filter((el) => el.completed === false);
  this.reorderTasks();
  this.show();
  this.save();
};
