import { Component, OnInit, Input } from "@angular/core";
import { quiz, QuizResolved } from "../models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  finalScore: number;
  quizAnsweredQueries: quiz[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: QuizResolved) => {
      this.quizAnsweredQueries = data["quizQueries"].Quiz;
    });
    // console.log(this.quizAnsweredQueries);
  }

  ngOnInit() {}
}
