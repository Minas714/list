import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterLink } from '@angular/router';
import{IndexComponent} from './index/index.component'
import { PostAdsComponent } from './post-ads/post-ads.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path:"user/add",
    component:PostAdsComponent
  },
  
  {
    path:"category",
    component:CategoryComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
