import SlideHeader from "../components/SlideHeader";
import TitleList from "../components/TitleList";
import Quote from "../../Quote";

// Quote
interface QuoteProps {
    type: 'quote';
    quote: string;
    author: string;
}

// Quote with tooltip
interface QuoteToolTipProps extends Omit<QuoteProps, 'type'> {
    type: 'quote-tooltip';
    text: string;
    tip: string;
    source: string;
}

interface QuoteNoAuthorProps extends Omit<QuoteProps, 'type' | 'author'> {
    type: 'quote-no-author';
}

// Quote can be either plain quote or quote with tooltip
type QuoteType = QuoteProps | QuoteToolTipProps | QuoteNoAuthorProps;

interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    text?: string;
    texts?: string[];
    items: {title: string, text: string}[];
    quote?: QuoteType;
    inverted?: boolean;
    quoteUnderText?: boolean;
}

const TextListLayout: React.FC<Props> = ({ header, text, texts, items, quote, inverted, quoteUnderText }: Props) => {
    return (
        <div className="slide--text-list-layout">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                <div className="slide--text-list-layout__text">
                    {text ? <p className="slide--text-list-layout__text">{text}</p> : null}
                    {texts ? texts.map((text, index) =>
                        <p key={index} className="slide--text-list-layout__text">
                            {text}
                        </p>
                    ) : null}
                    {quote && quoteUnderText ? <Quote quote={quote} /> : null}
                </div>
                <TitleList items={items} />
            </div>
            {quote && !quoteUnderText ? <Quote quote={quote} /> : null}
        </div>
    );
}

export default TextListLayout;
