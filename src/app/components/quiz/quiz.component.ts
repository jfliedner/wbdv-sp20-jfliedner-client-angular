import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../../services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private svc: QuestionServiceClient) { }

  quizId = ''
  questions = []
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
        this.quizId = ps.quizId;
        this.svc.findQuestionsForQuiz(this.quizId)
          .then(questions => this.questions = questions);

      });
    }

}
