import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SetupComponent } from './setup/setup.component';
import { HomeComponent } from './home/home.component';
//import { AppRoutingModule } from './/app-routing.module';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'graphs', component: GraphsComponent },
  
]


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    GraphsComponent,
    SetupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
