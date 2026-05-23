
import { useState } from 'react';
import './App.css'

function App() {

  const quizData = [
    {
      id: 1,
      question: "What is JSX?",
      options: [
        "JavaScript XML syntax",
        "Java Extra Markup",
        "JavaScript Extension",
        "None of above"
      ],
      correctAnswer: 0  // Index of correct answer
    },
    {
      id: 2,
      question: "Which hook manages state in functional components?",
      options: [
        "useContext",
        "useState",
        "useEffect",
        "useReducer"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Props are ___?",
      options: [
        "Mutable",
        "Read-only (immutable)",
        "Global",
        "Local only"
      ],
      correctAnswer: 1
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAns] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNext = () => {
    if(currentQuestion < quizData.length - 1){
      setCurrentQuestion(currentQuestion + 1);
      }
    }

  const handlePrevious = () => {
    if(currentQuestion > 0)
    setCurrentQuestion(currentQuestion - 1);
  }

  const handleAnswerclick = (index) => {
    if(questionAnswered) return; // Prevent changing answer after selection
    if(index === quizData[currentQuestion].correctAnswer){
      setScore(score + 1);
      setValid(true);
    }
    if(index !== quizData[currentQuestion].correctAnswer){
      alert("Wrong answer!");
      return;
    }
  }

  const question = quizData[currentQuestion]

 
  

  return (
    <div className="container">
      <h1>🎯 Quiz Master</h1>
      <p className="question-number">
        Question {currentQuestion + 1} of {quizData.length}
      </p>

      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} className="option-btn">
            {option}
          </button>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          ← Previous
        </button> 
        <button onClick={handleNext} disabled={currentQuestion === quizData.length - 1}>
          Next →
        </button>
      </div>      
    </div>
  )
}

export default App;
