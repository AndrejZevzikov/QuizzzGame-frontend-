import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GameResult } from 'src/app/entities/game-result';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  gameresults: GameResult[] = [];
  apiUrl: string ="http://localhost:8080/results" 
  apiUrlProd:string = "";

  constructor(private router: Router, private httpClient: HttpClient) { }

  onBack() {
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.httpClient.get<GameResult[]>(this.apiUrl + "/top=0").subscribe(
      (result) => {
        this.gameresults = result;
        console.log(this.gameresults)
      }
    )
  }

}
