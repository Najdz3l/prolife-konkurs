import { useState } from "react";

interface Props {
    question: string;
    options: [string, string];
    answers: [string, string];
}

// ToDO:
// Hide the options after selecting one
const MoralQuestion: React.FC<Props> = ({question, options, answers}: Props) => {
    const [selected, setSelected] = useState(-1);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleSelect = (option: number) => {
        setSelected(option);
        setShowAnswer(true);
    };

    return (
        <div className="slide--moral-question slide--true-false-question">
            <p>{question}</p>
            <div className="true-false-buttons moral-question-options">
                {selected === -1 ? (
                    options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className="btn-primary"
                        >{option}
                        </button>
                    ))
                ) : null}
            </div>
            {showAnswer && (
                <div className="answer">
                    <p>{answers[selected]}</p>
                </div>
            )}
        </div>
    );
};

export default MoralQuestion;
