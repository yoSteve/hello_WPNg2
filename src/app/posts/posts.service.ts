import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  private siteName = 'http://localhost/wordpress';
  private postUrl = `${this.siteName}/wp-json/wp/v2/`

  constructor(private http:Http) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get(this.postUrl + 'posts')
      .map((res:Response) => res.json());
  }

} // end class
