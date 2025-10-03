import { Component, Input } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-delete-all',
  imports: [],
  templateUrl: './to-do-delete-all.html',
  styleUrl: './to-do-delete-all.scss'
})
export class ToDoDeleteAll {

  // Recebe a lista de tarefas do pai
  @Input() public taskList: Array<TaskList> = [];

  // Função para apagar todas
  public deleteAllTaskList() {
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");
    if (confirm) {
      this.taskList.splice(0, this.taskList.length); // limpa a lista
      localStorage.setItem("list", JSON.stringify(this.taskList)); // salva
    }
  }
}

