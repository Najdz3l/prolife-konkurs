interface Props {
    question: string;
    answers: string[];
    onAnswer: (answer: number) => void;
}

const MultipleChoiceQuestion: React.FC<Props> = ({ question, answers, onAnswer }) => {
    return (
        <>
            <h1>{question}</h1>
            <div className="multiple-choice-buttons">
                {answers.map((answer, index) => (
                    <button key={index} onClick={() => onAnswer(index)} className="btn-primary">
                        {answer}
                    </button>
                ))}
            </div>
        </>
    );
};

export default MultipleChoiceQuestion;
