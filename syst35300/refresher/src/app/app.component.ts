import { Component } from '@angular/core';
import { TodoList } from './model/todoList';
import { TodoItem } from './model/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showComplete: boolean = false;

  private list = new TodoList ("Bob", [
    new TodoItem ("Go for run"),
    new TodoItem ("Get Flowers"),
    new TodoItem ("Collect tickets"),
  ]);

  get username (): string 
  {
    return this.list.user;
  }

  get itemCount(): number { return this.items.length; }

  get items(): readonly TodoItem[] 
  {
    return this.list.items.filter (item => this.showComplete ||
      !item.complete);
  }

  addItem (newItem:string) 
  {
    if (newItem != "") {
      this.list.addItem (newItem);
    }
  }
}
