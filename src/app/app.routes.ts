import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {LoginComponent} from "./components/pages/login/login.component";

export const routes: Routes = [
  {
    path: 'blog', component: BlogComponent, pathMatch: "full"
  },
  {
    path: 'contact', component: ContactComponent, pathMatch: "full"
  },
  {
    path: 'home', component: HomeComponent, pathMatch: "full"
  },
  {
    path: 'about', component: AboutComponent, pathMatch: "full"
  },
  {
    path: 'login', component: LoginComponent, pathMatch: "full"
  },
  {
    path: '**', redirectTo: 'home'
  },
];
