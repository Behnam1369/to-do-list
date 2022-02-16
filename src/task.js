export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed || false; // default value
    this.index = index || -1; // default value before pushing into list
  }
}
