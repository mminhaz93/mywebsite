import { Injectable } from '@angular/core';
//Firebase
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>
  constructor(private firedb: AngularFireDatabase) { }

  // Get all list
  getToDoList(){
    this.toDoList = this.firedb.list('titles');
    return this.toDoList;
  }

  //add new todo
  addTitle(title: string){
    this.toDoList.push({
      title: title,
      // check to see item is completed
      isChecked: false
    })
  }

  //mark complete
  checkOrUnCheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag});
  }

  //remove todo
  removeTitle($key: string){
    this.toDoList.remove($key);
  }
}
