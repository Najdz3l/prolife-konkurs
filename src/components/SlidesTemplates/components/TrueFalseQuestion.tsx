import { useState } from 'react';

interface Props {
    question: string;
    answers: string[];
    correctAnswer: number;
    onAnswer: (answer: boolean) => void;
    texts: string[];
}

const TrueFalseQuestion: React.FC<Props> = ({ question, answers, correctAnswer, onAnswer, texts }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        setIsCorrect(answerIndex === correctAnswer);
        onAnswer(answerIndex === correctAnswer);
    };

    return (
        <div className="slide--true-false-question">
            <h2>{question}</h2>
            <div className='true-false-buttons quiz--js' data-value={1}>
                {selectedAnswer === null ? (
                    answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={selectedAnswer !== null}
                            className={`btn-primary ${selectedAnswer !== null ? 'btn-primary--disabled' : ''}`}
                        >
                            {answer}
                        </button>
                    ))
                ) : (
                    selectedAnswer !== null && (
                        <span className={`true-false-answer__text ${isCorrect ? 'answer__correct' : 'answer__incorrect'}`}>{isCorrect ? texts[0] : texts[1]}</span>
                    )
                )}
            </div>
        </div>
    );
};

export default TrueFalseQuestion;
