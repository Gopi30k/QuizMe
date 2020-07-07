import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { quiz, QuizResolved } from "./models";
import { QuizService } from "./quiz.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RouteResolverService implements Resolve<QuizResolved> {
  constructor(private quizService: QuizService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QuizResolved> {
    const value = JSON.parse(sessionStorage.getItem("userSelection"));
    return this.quizService.getQuizQuestions(value).pipe(
      map((quiz) => ({ Quiz: quiz })),
      catchError((error) => {
        return of({
          Quiz: null,
          error: `Oops !!! Error please in resolver ${error}`,
        });
      })
    );
  }
}
