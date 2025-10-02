import { Component, DoCheck } from '@angular/core';
import { ToDoDeleteAll } from "../to-do-delete-all/to-do-delete-all";
import { ToDoInputAddItens } from "../to-do-input-add-itens/to-do-input-add-itens";
import { CommonModule } from '@angular/common';   // <-- ngIf, ngFor, ngClass
import { FormsModule } from '@angular/forms';     // <-- ngModel

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoDeleteAll, ToDoInputAddItens, FormsModule, CommonModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss'
})

export class ToDoList implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
  }

  public setEmitTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está sem vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}

