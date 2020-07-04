import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";
import { difficulty, category, quiz, quizResponse, Result } from "./models";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  private _url: string = "https://opentdb.com/api.php";
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getQuizQuestions(optionsSelected) {
    let queryParams = {
      category: optionsSelected.category.code,
      difficulty: optionsSelected.difficulty,
      amount: (function amountCalc() {
        if (optionsSelected.difficulty === "easy") return "10";
        else if (optionsSelected.difficulty === "medium") return "20";
        else return "30";
      })(),
    };
    let httpParam = new HttpParams({ fromObject: queryParams });
    return this.http
      .get<quizResponse>(this._url, { params: httpParam })
      .pipe(
        // tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }
}
