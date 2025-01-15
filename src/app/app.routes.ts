import { Routes } from '@angular/router';
import { SignInPageComponent } from './auth/sign-in-page/sign-in-page.component';
import { ForgetPassComponent } from './auth/forget-pass/forget-pass.component';

export const routes: Routes = [
    {
        path:'signIn',component:SignInPageComponent
      } ,
      {
        path:'',redirectTo:'/signIn',pathMatch:'full'
      },
      {
       path:'forgetPass',component:ForgetPassComponent
      },
];
