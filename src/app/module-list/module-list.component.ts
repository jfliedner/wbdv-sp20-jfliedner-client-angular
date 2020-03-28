import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  modules = []
  moduleId = ''
  courseId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid
      fetch(`http://wbdv-generic-server.herokuapp.com/api/001234485/courses/${this.courseId}/modules`)
        .then(response => response.json())
        .then(modules => this.modules = modules);
    });
  }

}
