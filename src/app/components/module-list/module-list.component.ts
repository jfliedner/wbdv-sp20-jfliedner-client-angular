import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient ) { }

  modules = []
  moduleId = ''
  courseId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }

}
