import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-set-user-form',
  templateUrl: './set-user-form.component.html',
  styleUrls: ['./set-user-form.component.css']
})
export class SetUserFormComponent implements OnInit {

  username:string = "";
  score:number = 0;

  constructor(private router: Router) {
   
   }

  showUsername(){
    if(this.username.length!=0){
      return this.username;
    } return "Guest"
  }

  onLetsGo(){
    AppComponent.username = this.username;
    this.router.navigate(["game"]);
  }

  ngOnInit(): void {


  }

  onSubmit(){
  }

}
