import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridpocComponent } from './pages/gridpoc/gridpoc.component';
import { PocpropertiesComponent } from './pages/pocproperties/pocproperties.component';


import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DxButtonModule  } from 'devextreme-angular';
import { DxSelectBoxModule  } from 'devextreme-angular';
import { DxColorBoxModule } from 'devextreme-angular';
import { 
  DxTextBoxModule,
  DxTemplateModule, DxDateBoxModule, DxCalendarModule  } from 'devextreme-angular';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { DxCheckBoxModule } from 'devextreme-angular';



const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'gridpoc',
    component: GridpocComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'propertiespoc',
    component: PocpropertiesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),
     DxDataGridModule,
     DxFormModule, 
     DxButtonModule, 
     DxSelectBoxModule,
     DxTextBoxModule,
     DxTemplateModule,
     DxDateBoxModule,
     DxCalendarModule, 
     BrowserModule,
     DxColorBoxModule,
     DxCheckBoxModule
    ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    GridpocComponent,
    PocpropertiesComponent    
  ]
})
export class AppRoutingModule { }
