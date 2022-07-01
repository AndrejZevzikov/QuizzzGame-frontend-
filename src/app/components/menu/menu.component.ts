import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient, private sanitizer: DomSanitizer) { };
  isAdmin: boolean = true;
  apiUrl = "http://localhost:8080/files";
  retrieveUrl:any ="../../../assets/images/movieMain.jpg"

  onLeaderboard() {
    this.router.navigate(["leaders"]);
  }

  onNewGame() {
    this.router.navigate(["user"]);
  }
  onAddQuestion() {
    this.router.navigate(["add_question"]);
  }

  ngOnInit(): void {
    //this.httpClient.get(this.apiUrl).subscribe(
      //(baseImage : any) => {
        //alert(JSON.stringify(data.image));
        //let objectURL = 'data:image/jpg;base64,' + baseImage.image;

       // this.retrieveUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
     // }
    //)
 }


}
