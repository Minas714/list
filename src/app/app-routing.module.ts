import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterLink } from '@angular/router';
import{IndexComponent} from './index/index.component'
import { PostAdsComponent } from './post-ads/post-ads.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponentt } from './login/login.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  
  {
    path:"us",redirectTo:'login',pathMatch:'full'
  },
  {
   path: "index",
   component: IndexComponent
  },
  {
   path: "",
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
  // {
  //  path:"loginn",
  //  component:LoginComponentt
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
