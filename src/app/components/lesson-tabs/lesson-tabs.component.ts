import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient ) { }

  moduleId = ''
  courseId = ''
  lessonId = ''
  lessons = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      this.courseId = params.cid;
      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
    });
  }

}
