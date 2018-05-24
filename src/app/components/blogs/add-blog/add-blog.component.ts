import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { tap, first } from "rxjs/operators";
import { BlogsService } from "../../../services/blogs.service";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"]
})
export class AddBlogComponent implements OnInit {
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private blogsService: BlogsService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ["", Validators.required],
      title: ["", Validators.required],
      link: ["", Validators.required]
    });

    // this.preloadData();
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.blogsService.insertBlog(formValue);
      this.success = true;
    } catch (err) {
      console.error(err);
    }

    this.loading = false;
  }
  
}


