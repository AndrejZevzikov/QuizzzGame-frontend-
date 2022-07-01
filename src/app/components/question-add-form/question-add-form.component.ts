import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/entities/answer';
import { Question } from 'src/app/entities/question';

@Component({
  selector: 'app-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.css']
})
export class QuestionAddFormComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  question: Question = { questionText: "", imageLink: null };
  difficulty: string = "easy";
  answers: Answer[] = [];
  correctAnswer: Answer = { answerText: "", isCorrect: true }
  wrongAnswer1: Answer = { answerText: "", isCorrect: false }
  wrongAnswer2: Answer = { answerText: "", isCorrect: false }
  wrongAnswer3: Answer = { answerText: "", isCorrect: false }
  apiUrlQ: string = "http://localhost:8080/question";
  apiUrlA: string = "http://localhost:8080/answer";
  alert: boolean = false;

  ngOnInit(): void {
  }

  setEasy() {
    this.difficulty = "easy";
  }
  setMedium() {
    this.difficulty = "medium";
  }
  setHard() {
    this.difficulty = "hard";
  }

  onSubmit() {
    this.httpClient.post<Question>(this.apiUrlQ + "/add_" + this.difficulty, this.question).subscribe(
      (result) => {
        this.question = result;
        this.correctAnswer.question = this.question;
        this.wrongAnswer1.question = this.question;
        this.wrongAnswer2.question = this.question;
        this.wrongAnswer3.question = this.question;

        this.answers.push(this.correctAnswer);
        this.answers.push(this.wrongAnswer1);
        this.answers.push(this.wrongAnswer2);
        this.answers.push(this.wrongAnswer3);


        this.httpClient.post<Answer[]>(this.apiUrlA + "/add", this.answers).subscribe();

        this.clearForm();
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        },
          1500);
      }
    )
  }

  clearForm() {
    this.question = { questionText: "", imageLink: "" };
    document.getElementById("btnradio1")?.click()
    this.correctAnswer = { answerText: "", isCorrect: true }
    this.wrongAnswer1 = { answerText: "", isCorrect: false }
    this.wrongAnswer2 = { answerText: "", isCorrect: false }
    this.wrongAnswer3 = { answerText: "", isCorrect: false }
    this.answers = [];
  }

  onBack() {
    this.router.navigate(["/"])
  }

}
