import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-input-add-itens',
  imports: [FormsModule ],
  templateUrl: './to-do-input-add-itens.html',
  styleUrl: './to-do-input-add-itens.scss'
})
export class ToDoInputAddItens implements OnInit  {

  // Emite o item digitado para o componente pai
  @Output() public emitItemTaskList = new EventEmitter();

  // Guarda o texto digitado
  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  //Enviando tarefa para o componente pai
  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  };
}
