import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mysqCon';
  postTitle = '';
  postContent = '';

  constructor(private postService: PostService) { }

  createPost() {
    this.postService.createPost(this.postTitle, this.postContent)
      .subscribe(response => {
        console.log(response);
      });
  }
}