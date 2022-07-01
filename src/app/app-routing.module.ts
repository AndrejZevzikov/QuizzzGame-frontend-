import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionAddFormComponent } from './components/question-add-form/question-add-form.component';
import { SetUserFormComponent } from './components/set-user-form/set-user-form.component';

const routes: Routes = [
  {path: "",component:MenuComponent},
  {path: "user",component:SetUserFormComponent},
  {path: "leaders",component:LeaderboardComponent},
  {path: "game",component:GameFieldComponent},
  {path: "add_question",component:QuestionAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
