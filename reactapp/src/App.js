import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';

const quizData = [
  {
    question: 'Who is the father of our nation ?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump', 'Barrak Obama'],
    answer: 'Mahatma Gandhi',
  },
  {
    question: 'What color is are the leaves ?',
    options: ['Blue', 'Red', 'Yellow', 'Green'],
    answer: 'Green',
  },
  {
      question: 'What color is the sky ?',
      options: ['Blue', 'Red', 'Yellow', 'Green'],
      answer: 'Blue',
    },
    {
      question: 'What color is the sky ?',
      options: ['Blue', 'Red', 'Yellow', 'Green'],
      answer: 'Blue',
    },
    {
      question: 'What color is the fire ?',
      options: ['Blue', 'Red', 'Yellow', 'Green'],
      answer: 'Red',
    },

];
const App = () => {

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(''));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuizClick = () => {
    setShowQuiz(true);
  };

  const handleOptionClick = (option, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);

    const correctAnswer = quizData[index].answer;

    if (option === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleShowResultsClick = () => {
    setShowResults(true);
  };

  const handleStartAgainClick = () => {
    setShowQuiz(false);
    setSelectedOptions(Array(quizData.length).fill(''));
    setScore(0);
    setShowResults(false);
  };

  return (
    <div>
      <h1>Quizz App</h1>
      {!showQuiz && (
        <Button onClick={handleStartQuizClick}>Start Quiz</Button>
      )}
      {showQuiz && !showResults && (
        <div>
          {quizData.map((question, index) => (
            <Card key={index}>
              <h3>{question.question}</h3>
              {question.options.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleOptionClick(option, index)}
                  disabled={selectedOptions[index] !== ''}
                  style={{
                    backgroundColor: selectedOptions[index] === option ? 'green' : '',
                  }}
                >
                  {option}
                </Button>
              ))}
            </Card>
          ))}
          {selectedOptions.every((option) => option !== '') && (
            <Button onClick={handleShowResultsClick}>Show Results</Button>
          )}
        </div>
      )}
      {showResults && (
        <div>
          <p>Your have answered {score}/{quizData.length} Correctly</p>
          <Button onClick={handleStartAgainClick}>Start Quiz</Button>
        </div>
      )}
    </div>
  );
};
export default App;