import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { LoginComponent } from './common-components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PrivilegesComponent } from './components/admin/privileges/privileges.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { ToolsComponent } from './components/admin/tools/tools.component';
import { UsersComponent } from './components/admin/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountComponent } from './components/profile/account/account.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsertoolComponent } from './components/user/user-project/usertool/usertool.component';
import { UserProjectComponent } from './components/user/user-project/user-project.component';
import { UserComponent } from './components/user/user.component';
import { SetPasswordComponent } from './common-components/set-password/set-password.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupformComponent } from './signupform/signupform.component';
import { ProjectComponent } from './project/project.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
// import { UserComponent } from './components/user/user.component';
// import { UserProjectsComponent } from './components/user/user-projects/user-projects.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  { path: 'man', component: ProjectComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'reset',
    canActivate: [AuthGuard],
    component: SetPasswordComponent,
  },
  { path: 'signup', component: SignupformComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'privileges', component: PrivilegesComponent },
    ],
  },
  { path: 'user', canActivate: [AuthGuard], component: UserComponent },
  {
    path: 'projectList',
    canActivate: [AuthGuard],
    component: UserProjectComponent,
  },
  { path: ':toolid', canActivate: [AuthGuard], component: UsertoolComponent },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
