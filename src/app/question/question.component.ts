import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  pushups: Exercise = {
    id: 1,
    ask: 'How many push-ups did you do today?',
    target: 0,
    actual: 0
  };
  
  miles: Exercise = {
    id: 2,
    ask: 'How many miles did you run today?',
    target: 0,
    actual: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
