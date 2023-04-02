import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import * as hljs from 'highlight.js';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent{
  // Service of posts
  constructor(private postsService: PostsService, private router: Router) { }

  @ViewChild('body') bodyTextArea: ElementRef = new ElementRef('textarea');
  isCoding: boolean  = false;

  post: Post = {
    id: '',
    title: '',
    body: '',
    code: 'console.log("Hi I am a John Gualteros 🚀🦄")',
  };

  highlightCode() {
    const code = this.post.code;
    const highlightedCode = hljs.default.highlight('javascript', code).value;
     // Agregar el código resaltado al contenido del post
    this.post.body += `
      <pre>
        <code class="hljs">${highlightedCode}</code>
      </pre>
    `;
    this.post.code = '';
    return highlightedCode;
  }

  showCoding() {
    this.isCoding = !this.isCoding;
    this.post.code = '';
  }

  saveBlockCode() {
    this.highlightCode();
  }

  // method for validate if the user is typing a subtitle and append the span with class subtitle
  onBodyChange(event: string) {
    const text = this.validateIfIsSubtitle(event);
    this.post.body = this.post.body + text;
  }

  // method for get the index of fisrt coincidence
  getIndexOfFirstCoincidence(text: string, character: string) {
    return text.indexOf(character);
  }

  // method for get the index of last coincidence
  getIndexOfLastCoincidence(text: string, character: string) {
    return text.lastIndexOf(character);
  }

  // method for validate if the user is typing a subtitle and append the span with class subtitle
  validateIfIsSubtitle(text: string): string {
    const indexFirst = this.getIndexOfFirstCoincidence(text, '#');
    const indexLast = this.getIndexOfLastCoincidence(text, '<br>');
    if (indexFirst >= 0 && indexLast >= 0) {
      const oldSubtitle = text.substring(indexFirst, indexLast);
      this.post.body = this.post.body.replace(oldSubtitle + '<br>', '');
      let subtitle = oldSubtitle.replace('#', `<span class="span">`);
      subtitle = subtitle + `</span>`;
      return subtitle;
    }
    return '';
  }

  // Host Listener listen the keydown enter
  @HostListener('keydown.enter', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.target === this.bodyTextArea.nativeElement) {
      this.post.body = this.post.body + '<br>';
    }
  }

  // Host Listener listen the keydown control + enter
  @HostListener('keydown.control.enter', ['$event'])
  onKeyControlEnter(event: KeyboardEvent) {
    if (event.target === this.bodyTextArea.nativeElement) {
      this.onBodyChange(this.post.body);
    }
  }

  // METHOD FOR SAVE THE POST
  savePost() {
    this.post.id = uuidv4();
    this.postsService.saveNewPost(this.post);
    this.post = {
      id: '',
      title: '',
      body: '',
      code: '',
    };
    this.router.navigate(['/']);
  }

}
