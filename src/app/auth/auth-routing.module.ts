import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterLink } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';


const routes: Routes = [
    {path:"us",component:AuthComponent,children:[
        {path:'login',component:LoginComponent}
    ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
