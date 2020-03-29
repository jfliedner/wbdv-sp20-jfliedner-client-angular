import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001234485/courses')
      .then(response => response.json())

  findCourseById = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001234485/courses/${cid}`)
      .then(response => response.json())

  findModulesForCourse = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001234485/courses/${cid}/modules`)
      .then(response => response.json())

  findLessonsForModule = (mid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001234485/modules/${mid}/lessons`)
      .then(response => response.json())
}
