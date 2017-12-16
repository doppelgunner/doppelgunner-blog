import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewTextComponent } from './components/view/view-text/view-text.component';
import { ViewHtmlComponent } from './components/view/view-html/view-html.component';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HeaderComponent } from './components/layout/header/header.component';
import { ViewMarkdownComponent } from './components/view/view-markdown/view-markdown.component';
import { TestTabComponent } from './components/layout/test-tab/test-tab.component';
import { EditMarkdownComponent } from './components/edit/edit-markdown/edit-markdown.component';
//markdown-editor -  import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import {AceEditorModule } from 'ng2-ace-editor';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import {TimeAgoPipe} from 'time-ago-pipe';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
//import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';
import { ROUTING } from './app-routing';
import { LoginComponent } from './components/user/login/login.component';

import { TempService, CheckerService, PostService, AuthService } from './services';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { CardComponent } from './components/layout/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TooltipDirective } from './directives/tooltip.directive';
import { TestViewsComponent } from './components/layout/test-tab/test-views/test-views.component';
import { TestEditsComponent } from './components/layout/test-tab/test-edits/test-edits.component';
import { TestBlogPostsComponent } from './components/layout/test-tab/test-blog-posts/test-blog-posts.component';
import { TestLoginComponent } from './components/layout/test-tab/test-login/test-login.component';
import { TestCardsComponent } from './components/layout/test-tab/test-cards/test-cards.component';

firebase.initializeApp(environment.firebase);

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
    TimeAgoPipe,
    LoginComponent,
    LoadingSpinnerComponent,
    CardComponent,
    TooltipDirective,
    TestViewsComponent,
    TestEditsComponent,
    TestBlogPostsComponent,
    TestLoginComponent,
    TestCardsComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownToHtmlModule.forRoot(),
    //markdown-editor - LMarkdownEditorModule,
    FormsModule,
    AceEditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //MarkdownToHtmlModule,
    ROUTING,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [TempService, CheckerService, PostService, AuthService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
