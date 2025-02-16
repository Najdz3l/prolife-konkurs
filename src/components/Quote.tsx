import ToolTip from "./ToolTip";

import QuoteIcon from "../assets/icons/Quote.svg";

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

interface Props {
    quote: QuoteProps | QuoteToolTipProps | QuoteNoAuthorProps;
    classes?: string[];
}

const Quote: React.FC<Props> = ({ quote, classes }: Props) => {
    return (
        <>
            <p className={`quote ${classes ? classes.join(' ') : ''}`}>
                <i>
                    <img src={QuoteIcon} alt="Quote" className="quote__icon" />
                    {quote.type === 'quote' || quote.type === 'quote-no-author' ? (
                        quote.quote
                    ) : (
                        <ToolTip {...quote} classes={'quote-text'} />
                    )}
                    <img src={QuoteIcon} alt="Quote" className="quote__icon" />
                    {quote.type === 'quote-no-author' ? null : <span className="quote__author">{quote.author}</span>}
                </i>
            </p>
        </>
    );
};

export default Quote;
