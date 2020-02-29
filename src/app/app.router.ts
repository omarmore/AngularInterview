import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostErrorComponent } from "./components/post-error/post-error.component";


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: '404', component: PostErrorComponent },
    { path: '**', pathMatch: 'full', redirectTo:'404' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
