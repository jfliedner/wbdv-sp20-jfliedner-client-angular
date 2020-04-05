import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
// <app-course-list/> is how we refer to this
export class CourseTableComponent implements OnInit {

  title = 'Course List Component'

  courses = []

  newCourseTitle = ''

  constructor(private service: CourseServiceClient ) { }

  createCourse = () => {
    this.courses.push({_id: Math.random(), title: this.newCourseTitle});
  }

  deleteCourse = (courseToDel) => {
    this.courses = this.courses.filter(course => course !== courseToDel);
  }
  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
