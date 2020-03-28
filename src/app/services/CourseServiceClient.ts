import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001234485/courses')
      .then(response => response.json())


}
