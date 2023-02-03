import React, {useState} from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;


function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));

  // Range of functions that are triggered by actions within the interface
  const startTrivia = async () => {
      
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {


  }

  // User Interface below
  return (
    <div className="App">

    <h1> React/Typescript Quiz </h1>

    <button className='start' onClick={startTrivia}>
      Start Quiz
    </button>

    <p className='score'>Score:</p>

    <p>Loading Questions...</p>

    {/* <QuestionCard 
    
    questionNr={number + 1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number] : undefined}
    callback={checkAnswer}
    /> */}

    <button className='next' onClick={nextQuestion}>
      Next Question
    </button>

    </div>
  );
}

export default App;
