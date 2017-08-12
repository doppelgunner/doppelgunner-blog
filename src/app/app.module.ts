import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewTextComponent } from './components/view/view-text/view-text.component';
import { ViewHtmlComponent } from './components/view/view-html/view-html.component';

import { TempService, CheckerService } from './services';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HeaderComponent } from './components/layout/header/header.component';
import { ViewMarkdownComponent } from './components/view/view-markdown/view-markdown.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { TestTabComponent } from './components/layout/test-tab/test-tab.component';
import { EditMarkdownComponent } from './components/edit/edit-markdown/edit-markdown.component';
//markdown-editor -  import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import {AceEditorDirective } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    ViewTextComponent,
    ViewHtmlComponent,
    SafeHtmlPipe,
    HeaderComponent,
    ViewMarkdownComponent,
    TestTabComponent,
    EditMarkdownComponent,
    AceEditorDirective
  ],
  imports: [
    BrowserModule,
    MarkdownToHtmlModule.forRoot(),
    //markdown-editor - LMarkdownEditorModule,
    FormsModule,
  ],
  providers: [TempService, CheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
