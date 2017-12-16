import { RouterModule,Routes } from '@angular/router';
import { 
    TestTabComponent, EditMarkdownComponent, ViewMarkdownComponent,
    TestViewsComponent, TestCardsComponent, TestBlogPostsComponent, TestLoginComponent, TestEditsComponent
} from './components';

/*
const idChildRoutes = [
    {path: 'edit', EditMarkdownComponent}
];
*/

const APP_ROUTES = [
    // {path: '', component: TestTabComponent, pathMatch: 'full'},
    {path: '', redirectTo: 'test', pathMatch: 'full'},

    // tests
    {path: 'test', component: TestTabComponent, 
        children: [
            {path: '', redirectTo: 'test-views', pathMatch: 'full'},
            {path: 'test-views', component: TestViewsComponent},
            {path: 'test-edits', component: TestEditsComponent},
            {path: 'test-blog-posts', component: TestBlogPostsComponent},
            {path: 'test-login', component: TestLoginComponent},
            {path: 'test-cards', component: TestCardsComponent}
        ]
    },

    {path: ':id/edit', component: EditMarkdownComponent},
    {path: ':id', component: ViewMarkdownComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);