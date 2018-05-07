import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDoList()
      .snapshotChanges()
      .subscribe(item => {
        //initialized to empty array
        this.toDoListArray = [];
        item.forEach(element => {
          //intialized to retrive JSON data (key, data) from inserted data
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.toDoListArray.push(x);
        })

        //sort array based on isChecked false -> true
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        })
      })
  }

  onAdd(itemTitle) {
    //add todo
    this.todoService.addTitle(itemTitle.value);
    //clear the fild
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    this.todoService.checkOrUnCheckTitle($key, !isChecked);
  }

  trashTodo($key: string) {
    this.todoService.removeTitle($key);
  }

}
