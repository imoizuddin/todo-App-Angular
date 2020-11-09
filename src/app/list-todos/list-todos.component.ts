import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  //  = [
  //   new Todo(1, 'Learn to Code', false, new Date()),
  //   new Todo(2, 'Become an Expert in JavaScript', false, new Date()),
  //   new Todo(3, 'Become an Expert in Angular', false, new Date())
  // {id : 1, description : 'Learn to Dance'},
  // {id : 2, description : 'Become an Expert at Angular'},
  // {id : 3, description : 'Visit India'}
  // ]

  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('moiz').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('moiz', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

}
