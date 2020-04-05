import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {QuestionServiceClient} from './services/question.service.client';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseServiceClient, QuizServiceClient, QuestionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
