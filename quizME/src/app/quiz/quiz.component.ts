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
  questionId: number = 0;
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
    this.questionId = this.questionId - 1 < 0 ? 0 : this.questionId - 1;
  }

  nextQuestion() {
    this.questionId =
      this.questionId + 1 > this.quizQueries.length - 1
        ? 0
        : this.questionId + 1;
  }
}
