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
  isDesc: boolean = false;
  column: string = 'id';

  constructor(private apiSerivce: DataService) { }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.apiSerivce.getPosts().
      subscribe(
        posts => this.postsData = posts,
        error => console.log("Error :: " + error))
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.postsData.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};

}
