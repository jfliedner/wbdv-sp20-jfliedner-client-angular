import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  answer = null;
  grading = false;
  correct

  grade = () => {
    if (this.answer === null) {
      return false;
    }
    this.grading = true;
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  }

  ngOnInit(): void {
  }

}
