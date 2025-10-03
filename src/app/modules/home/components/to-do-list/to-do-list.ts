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
  //DoCheck faz parte do ciclo de vida de componentes. Toda vez que ele roda, o método ngDoCheck() é chamado.

  // Lista de tarefas, carregada do LocalStorage
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  // Sempre que houver mudança, salva no LocalStorage
  ngDoCheck() {
    this.setLocalStorage()
  }

  // Recebe um evento de novo item e adiciona à lista
  public setEmitTaskList(event: string) {
    this.taskList.unshift({ id: Date.now(), task: event, checked: false });
    this.setLocalStorage();
  }

  // Remove uma tarefa pelo índice
  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  // Validação de input (não permitir string vazia)
  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está sem vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  // Salva a lista no LocalStorage
  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}

