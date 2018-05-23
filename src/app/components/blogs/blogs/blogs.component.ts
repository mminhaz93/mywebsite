import { Component, OnInit } from "@angular/core";
import { BlogsService } from "../../../services/blogs.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {
  blogListArray: any[];


  constructor(
    private blogService: BlogsService,
    private tostr: ToastrService
  ) {}

  ngOnInit() {
    this.blogService
      .getBlogs()
      .snapshotChanges()
      .subscribe(item => {
        //initialized to empty array
        this.blogListArray = [];
        item.forEach(element => {
          //intialized to retrive JSON data (key, data) from inserted data
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.blogListArray.push(x);
        });
        //sort array based on isChecked false -> true
        this.blogListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  onAdd(blogDate, blogTitle, blogLink) {
    //add Blog
    this.blogService.addBlog(blogDate.value, blogTitle.value, blogLink.value);
    //clear the fild
    blogDate.value = null;
    blogTitle.value = null;
    blogLink.value = null;
  }

  // onSubmit(blogForm: NgForm) {
  //   console.log(blogForm.value);
  //   // To update user
  //   if (blogForm.value.$key == null) {

  //     this.blogService.addBlog(blogForm.value);
  //   }
  //   this.tostr.success("Blog added successfully", "Add Blog");
  // }
}
