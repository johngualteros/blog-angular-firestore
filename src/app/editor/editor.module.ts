import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { EditorRoutingModule } from './editor-routing.module';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          java: () => import('highlight.js/lib/languages/java'),
          css: () => import('highlight.js/lib/languages/css'),
          cpp: () => import('highlight.js/lib/languages/cpp'),
          csharp: () => import('highlight.js/lib/languages/csharp'),
          python: () => import('highlight.js/lib/languages/python'),
          php: () => import('highlight.js/lib/languages/php'),
          ruby: () => import('highlight.js/lib/languages/ruby'),
          go: () => import('highlight.js/lib/languages/go'),
          swift: () => import('highlight.js/lib/languages/swift'),
        }
      }
    }
  ],
})
export class EditorModule { }
