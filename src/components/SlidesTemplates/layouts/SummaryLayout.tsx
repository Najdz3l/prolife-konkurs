import { useEffect, useState } from "react";

import Quote from "../../Quote";

interface QuoteProps {
    type: 'quote';
    quote: string;
    author: string;
}

interface QuoteToolTipProps extends Omit<QuoteProps, 'type'> {
    type: 'quote-tooltip';
    text: string;
    tip: string;
    source: string;
}

interface QuoteNoAuthorProps extends Omit<QuoteProps, 'type' | 'author'> {
    type: 'quote-no-author';
}

type QuoteType = QuoteProps | QuoteToolTipProps | QuoteNoAuthorProps;
interface linksProps {
    title: string;
    urls: string[];
}

interface Props {
    header?: { title?: string; subTitle?: string };
    texts: (string | QuoteType)[];
    links: linksProps[];
    results: boolean[];
}

import SlideHeader from "../components/SlideHeader";

const SummaryLayout: React.FC<Props> = ({ header, texts, links, results }: Props) => {
    const [questionsCount, setQuestionsCount] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        const getQuestionCount = () => {
            const questionElements = Array.from(document.getElementsByClassName('quiz--js'));
            let count = 0;
            questionElements.forEach((element) => {
                count += parseInt(element.getAttribute('data-value') || '0');
            });
            return count;
        };

        const getCorrectAnswers = () => {
            const correctAnswers = results.filter((result) => result);
            return correctAnswers.length;
        };

        setCorrectAnswers(getCorrectAnswers());
        setQuestionsCount(getQuestionCount());
    }, [results]);

    return (
        <div className="slide--summary">
            <div className="slide--summary--score">
                {!showScore ? <button className='btn-primary' onClick={() => setShowScore(true)}>Sprawdź swój wynik!</button> : null}
                {showScore && (
                    <p>
                        Uzyskałeś łącznie: {correctAnswers} / {questionsCount} punkty! Gratulacje!
                    </p>
                )}
            </div>
            {header ? <SlideHeader {...header} /> : null}
            <div className="slide__items slide__items--single-col">
            <h1>Bibliografia: </h1>
            {texts.map((text, index) => (
                typeof text === 'object' ? <Quote key={index} quote={text} /> : <p key={index}>{text}</p>
            ))}
            {links.map((link, index) => (
                <div key={index}>
                    <h1>{link.title}</h1>
                    <ul>
                        {link.urls.map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noreferrer">
                                    {url.substring(0, 75)}...
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
    );
};

export default SummaryLayout;
