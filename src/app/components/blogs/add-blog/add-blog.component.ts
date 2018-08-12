import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BlogsService } from "../../../services/blogs.service";
import * as moment from "moment";

import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"]
})
export class AddBlogComponent implements OnInit {
  user: Observable<firebase.User>;
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(
    private fb: FormBuilder,
    private blogsService: BlogsService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ["", Validators.required],
      title: ["", Validators.required],
      link: ["", Validators.required]
    });
    this.user = this.authService.authUser();
  }

  toDate() {
    var today = moment().format("YYYY-MM-DD");
    return today;
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value;
    try {
      this.blogsService.insertBlog(formValue);
      this.success = true;
    } catch (err) {
      console.error(err);
    }
    this.loading = false;
  }
}
