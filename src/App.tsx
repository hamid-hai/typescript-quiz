import React, {useState} from 'react';
import { StringLiteral } from 'typescript';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
// Components
import QuestionCard from './components/QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;


function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  // Range of functions that are triggered by actions within the interface
  const startTrivia = async () => {

    // Occurs when 'Start Quiz' button is pressed
    // Loading set to true, displays a loading state to the user whilst background operations occur
    setLoading(true);
    setGameOver(false);

    // const created to store question, difficulty passed in 'EASY'
    const newQuestions = await fetchQuizQuestions(

      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    // Finalizing the start of the quiz
    // Resetting the score as well as the current selected answer
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([])
    setNumber(0)

    // Loading is now complete so can be set to 'False' to display the quiz questions from API.
    setLoading(false)

      
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {


  }

  // User Interface below
  return (
    <div className="App">

    <h1> React/Typescript Quiz </h1>


     {/* Note to self - Shift + HASHTAG KEY = || OR SYMBOL */}


    {/* // OR statement wrapping around */}

    {/* Wrapped the start-button in a statement checking if the game is over or if the user has questions answered, 
      this determines the result of the button for 'Start Quiz' showing. 
    */}


    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (

    <button className='start' onClick={startTrivia}>
      Start Quiz
    </button>
    ) : null}


    {!gameOver ? <p className='score'>Score:</p> : null}

    {loading ? <p>Loading Questions...</p> : null}

    
    {!loading && !gameOver && (

    <QuestionCard 
    
    questionNr={number + 1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number] : undefined}
    callback={checkAnswer}

    />

    )}

    {!loading && !gameOver && (
    <button className='next' onClick={nextQuestion}>
      Next Question
    </button>
    )}

    </div>
  );
}

export default App;
