import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SetUserFormComponent } from './components/set-user-form/set-user-form.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionAddFormComponent } from './components/question-add-form/question-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    SetUserFormComponent,
    MenuComponent,
    GameFieldComponent,
    QuestionAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
