import { shuffleArray } from "./utlis";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[]
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

    // API CONNECTION POINT, TAKING IN MULTIPLE PARAMETERS THAT CAN BE ADJUSTED 
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await (await fetch(endpoint)).json();
    console.log(data)
    return data.results.map((question: Question) => (
        {
            // shuffle function to ensure random placement of multiple choice questions. 
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}