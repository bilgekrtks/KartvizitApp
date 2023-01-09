
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './welcome/login/login.component';
import { RegisterComponent } from './welcome/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component:RegisterComponent
  },

  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children:[
      {
        path: 'about', component: AboutComponent
      },
    
      {
        path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
      
      },
    ]
  }, 


  {
    path: '**', component: HomeComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
