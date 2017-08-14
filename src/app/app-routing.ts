import { RouterModule,Routes } from '@angular/router';
import { TestTabComponent, EditMarkdownComponent } from './components';

const APP_ROUTES = [
    {path: '', component: TestTabComponent, pathMatch: 'full'},
    {path: ':id', component: EditMarkdownComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);