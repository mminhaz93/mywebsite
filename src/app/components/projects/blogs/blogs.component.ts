import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post-interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  postsData: Post[];

  constructor(private apiSerivce: DataService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.apiSerivce.getPosts().
      subscribe(
        posts => this.postsData = posts,
        error => console.log("Error :: " + error))
  }

}
