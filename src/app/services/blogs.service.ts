import { Injectable } from "@angular/core";
//Firebase
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class BlogsService {
  blogsList: AngularFireList<any>;
  constructor(private firedb: AngularFireDatabase) {}

  // Get all list
  getBlogs() {
    this.blogsList = this.firedb.list("blogs");
    return this.blogsList;
  }

  //add new todo
  addBlog(blogDate, blogTitle, blogLink) {
    this.blogsList.push({
      date: blogDate,
      title: blogTitle,
      link: blogLink
    });
  }

  insertBlog(formValue) {
    this.blogsList.push(formValue);
  }
}
