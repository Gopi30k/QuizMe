export interface category {
  name: string;
  code: number;
}

export interface difficulty {
  label: string;
  value: string;
}

export interface quiz {
  question: string;
  options: string[] | number[];
}

export interface QuizResolved {
  Quiz: quiz[];
  error?: any;
}

export interface quizResponse {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: string | boolean;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
