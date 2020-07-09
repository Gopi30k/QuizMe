import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { quiz, QuizResolved } from "../models";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  quizQueries: quiz[];
  val1: string;
  questionNo: number = 0;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((data: QuizResolved) => {
      this.quizQueries = data["quizQueries"].Quiz;
    });
  }

  ngOnInit() {}

  prevQuestion() {
    this.questionNo = this.questionNo - 1 < 0 ? 0 : this.questionNo - 1;
  }

  nextQuestion() {
    this.questionNo =
      this.questionNo + 1 > this.quizQueries.length - 1
        ? 0
        : this.questionNo + 1;

    this.quizQueries[this.questionNo].selectedAnswer;
    console.log(this.quizQueries);
  }
}
