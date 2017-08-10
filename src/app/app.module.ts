import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewTextComponent } from './components/view/view-text/view-text.component';
import { ViewHtmlComponent } from './components/view/view-html/view-html.component';

import { TempService } from './services';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HeaderComponent } from './components/layout/header/header.component';
import { ViewMarkdownComponent } from './components/view/view-markdown/view-markdown.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

@NgModule({
  declarations: [
    AppComponent,
    ViewTextComponent,
    ViewHtmlComponent,
    SafeHtmlPipe,
    HeaderComponent,
    ViewMarkdownComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
