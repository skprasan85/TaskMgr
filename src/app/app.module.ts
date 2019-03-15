import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Router, Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    {
        path: 'viewtask',
        component: ViewtaskComponent
    },
    {
        path: 'addtask',
        component: AddtaskComponent
    },
    {
        path: 'edittask',
        component: EdittaskComponent
    },
    {
        path: '',
        component: ViewtaskComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewtaskComponent,
    AddtaskComponent,
    EdittaskComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
