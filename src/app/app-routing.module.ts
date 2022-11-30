import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizTComponent } from './quiz-t/quiz-t.component';
import { VideoTComponent } from './video-t/video-t.component';
import { CardsTComponent } from './cards-t/cards-t.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { VideoCComponent } from './video-c/video-c.component';
import { CardsCComponent } from './cards-c/cards-c.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'quizT', component: QuizTComponent},
  {path: 'videoT', component: VideoTComponent},
  {path: 'cardsT', component: CardsTComponent},
  {path: 'quizC', component: QuizCComponent},
  {path: 'videoC', component: VideoCComponent},
  {path: 'cardsC', component: CardsCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
