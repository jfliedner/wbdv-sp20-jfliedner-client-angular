import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
