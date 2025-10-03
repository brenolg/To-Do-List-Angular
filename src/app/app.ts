import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',

})
export class App {
//npx angular-cli-ghpages --dir="dist/to-do-list/browser" --repo="https://github.com/brenolg/To-Do-List-Angular.git" Faz o build e publica no github pages
}
