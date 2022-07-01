import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Answer } from 'src/app/entities/answer';
import { GameResult } from 'src/app/entities/game-result';
import { Question } from 'src/app/entities/question';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  username: string = "";
  score: number = 0;
  question: Question = {};
  correctAnswer: Answer = { id: 0, answerText: "" };
  previousQuestions: number[] = [];
  apiUrlQ = "http://localhost:8080/question"
  apiUrlA = "http://localhost:8080/answer"
  apiUrlR = "http://localhost:8080/results"
  timeLeft: number = 10;
  interval: any;
  disableButtons: boolean = false;
  styleBtn:string = "btn btn-outline-primary";
  clickedAnswer:Answer = {id:0,answerText:""};
  hasImageframe:boolean = true;

  constructor(private router: Router, private httpClient: HttpClient) { }

  onGiveUp() {
    this.wrongAnswerAction();
  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.wrongAnswerAction();
      }
    }, 1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changeAnswerButtonColor(answer:Answer,color:string){
    if(answer.id != undefined){
  
      document.getElementById(answer.id?.toString())!.style.backgroundColor = color;
      
      }
  }


  async onClickAnswer(answer:Answer) {
    this.clickedAnswer = answer;
    this.changeAnswerButtonColor(answer,"yellow");
    this.styleBtn = "btn btn-outline-primary gameBtn";
    this.disableButtons = true;
    this.pauseTimer();
    await this.delay(1300);
    

    this.httpClient.get<Answer>(this.apiUrlA + "/correct_" + this.question.id).subscribe(
      (result) => {
        this.correctAnswer = result;
        this.changeAnswerButtonColor(this.correctAnswer,"green")
        this.checkAnswer(answer.answerText);
      }
    )
  }

  async checkAnswer(ans:string){
    await this.delay(1300);
    if (this.correctAnswer.answerText == ans) {
      this.correctAnswerAction();
    } else {
      this.wrongAnswerAction();
    }
    
  }

  getImageLink() {
    if (this.question.imageLink != undefined) {
      console.log(this.question.imageLink)
      return this.question.imageLink;
    }
    return "../../../assets/images/movieMain.jpg"
  }

  wrongAnswerAction() {
    this.pauseTimer();
    this.httpClient.post<GameResult>(this.apiUrlR, { "username": this.username, "score": this.score }).subscribe();
    this.router.navigate(["/"]);
  }


  correctAnswerAction() {
    this.score++;
    this.disableButtons = false;
    this.setUpPreviuosQuestion();
    this.httpClient.get<Question>(this.apiUrlQ + "/random_" + this.score + "/pq?previousQuestions=" + this.previousQuestions).subscribe(
      (result) => {
        this.question = result;
        //if(this.question.imageLink != undefined){this.hasImageframe=true}else {this.hasImageframe = false};
      }
    )
    this.timeLeft = 10;
    this.startTimer();
    this.correctAnswer = { id: 0, answerText: "-" }
  }


  setUpPreviuosQuestion() {
    if (this.question.id != undefined)
      this.previousQuestions.push(this.question.id);
  }



  ngOnInit(): void {
    this.username = AppComponent.username;
    this.httpClient.get<Question>(this.apiUrlQ + "/game_start").subscribe(
      (result) => {
        this.question = result;
        this.startTimer();
        this.disableButtons = false;
        //if(this.question.imageLink != undefined){this.hasImageframe=true};
      }
    )

  }
}
