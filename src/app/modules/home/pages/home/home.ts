import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { ToDoList } from "../../components/to-do-list/to-do-list";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, ToDoList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
