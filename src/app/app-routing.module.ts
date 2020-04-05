import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {HomeComponent} from './components/home/home.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':layout/courses', component: CourseTableComponent},
  {path: 'course/:cid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
