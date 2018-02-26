import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountdownService } from './component/countdown/countdown.service'

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { PomodoroComponent } from './container/pomodoro/pomodoro.component';
import { CountdownComponent } from './component/countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PomodoroComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CountdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
