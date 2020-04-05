import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

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
