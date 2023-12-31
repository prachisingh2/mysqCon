import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(title: string, content: string) {
    const postData = {title: title, content: content};
    return this.http.post('http://localhost:3000/api/posts', postData);
  }
}