import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuizTComponent } from './quiz-t/quiz-t.component';
import { CardsTComponent } from './cards-t/cards-t.component';
import { VideoTComponent } from './video-t/video-t.component';
import { VideoCComponent } from './video-c/video-c.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { CardsCComponent } from './cards-c/cards-c.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuizTComponent,
    CardsTComponent,
    VideoTComponent,
    VideoCComponent,
    QuizCComponent,
    CardsCComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
