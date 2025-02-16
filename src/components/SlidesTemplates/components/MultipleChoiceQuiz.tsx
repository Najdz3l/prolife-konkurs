import { useState } from 'react';

import MultipleChoiceQuestion from './MultipleChoiceQuizQuestion';

interface Props {
    questions: string[];
    answers: string[][];
    correctAnswers: number[];
    onAnswer: (answer: boolean) => void;
    classes?: string[];
}

const QuizComponent: React.FC<Props> = ({ questions, answers, correctAnswers, onAnswer, classes }) => {
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (answer: number) => {
        onAnswer(answer === correctAnswers[currentQuestion]);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
    };

    return (
        <div className='slide--quiz quiz--js' data-value={questions.length}>
            <div className={`slide--quiz--content ${classes?.join(' ')}`}>
                {currentQuestion < questions.length ? (
                    <MultipleChoiceQuestion
                        question={questions[currentQuestion]}
                        answers={answers[currentQuestion]}
                        onAnswer={handleAnswer}
                    />
                ) : (
                <>
                    <h1>Quiz wiedzy został zakończony!</h1>
                    <h2>
                        Twój wynik to:&nbsp;
                        {userAnswers.filter((answer, index) => answer === correctAnswers[index]).length} / {questions.length}
                    </h2>
                </>
            )}
            </div>
        </div>
    );
};

export default QuizComponent;
