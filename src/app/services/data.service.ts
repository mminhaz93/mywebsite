import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../model/post-interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  private postsURL ="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http ) {}
 
  getPosts(): Observable<Post[]>{
    return this.http
     .get(this.postsURL)
     .map(res => res.json())
     .catch(this.handleError);
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }
}
