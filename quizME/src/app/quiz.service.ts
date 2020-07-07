import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap, map } from "rxjs/operators";
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

  /**
   *
   * @param optionsSelected Object of user selected values to be passed as query params to api
   */
  getQuizQuestions(optionsSelected) {

    //constructing query params object to pass to HttpParams
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

    //modify the api response as quiz(interface) strcutured array and return
    return this.http
      .get<quizResponse>(this._url, { params: httpParam })
      .pipe(
        map((apiData: quizResponse) => {
          return apiData.results.map((data) => {
            return {
              question: data.question,
              options: data.incorrect_answers,
            };
          });
        }),
        catchError(this.handleError)
      );
  }
}
