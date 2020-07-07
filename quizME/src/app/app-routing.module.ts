import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouteResolverService } from "./route-resolver.service";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: "question",
    component: QuizComponent,
    resolve: { quizQueries: RouteResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
