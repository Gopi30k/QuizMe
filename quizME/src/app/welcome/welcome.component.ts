import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { QuizService } from "../quiz.service";
import { quiz, category, difficulty, quizResponse } from "../models";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  quizForm: FormGroup;
  quizCategory: category[];
  selectedCategory: category;
  quizDifficilty: difficulty[];
  selectedDifficulty: difficulty;
  quizQueries: quiz[];
  constructor(private fb: FormBuilder, private quizService: QuizService) {
    this.quizCategory = [
      { name: "Movies", code: 11 },
      { name: "Technology", code: 18 },
      { name: "Sports", code: 21 },
      { name: "History", code: 23 },
      { name: "Politics", code: 24 },
      { name: "Mathematics", code: 19 },
    ];
    this.quizDifficilty = [
      {
        label: "Easy",
        value: "easy",
      },
      {
        label: "Medium",
        value: "medium",
      },
      {
        label: "Hard",
        value: "hard",
      },
    ];
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      userName: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      difficulty: new FormControl("", Validators.required),
    });
  }

  onSubmit(value: string) {
    this.quizService
      .getQuizQuestions(value)
      .subscribe((quizApiData: quizResponse) => {
        this.quizQueries = quizApiData.results.map((data) => {
          return {
            question: data.question,
            options: data.incorrect_answers,
          };
        });
      });
  }
}
