import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from './components/login/login.component';
import { DashbordComponent } from './components/dashboard/dashboard.component'
import { AuthGuard } from "./services/auth-guard/auth.guard";

const routes: Routes = [
  { 
    path: '',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
	{ 
    path: 'login', component: LoginComponent 
  },
	{
    path: 'dashboard',
    component: DashbordComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
