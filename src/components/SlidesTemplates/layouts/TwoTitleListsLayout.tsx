import SlideHeader from "../components/SlideHeader";
import TitleList from "../components/TitleList";
import Quote from "../../Quote";

interface aboveListHeaderProps {
    title: string;
    subTitle?: string;
}

interface listProps {
    title: string;
    text: string;
}

// Plain text
interface TextSubText {
    type: 'text';
    text: string;
};

// Quote
interface QuoteProps {
    type: 'quote';
    quote: string;
    author: string;
}

// Quote with tooltip
// Omit<QuoteProps, 'type'> - exclude 'type' from QuoteProps
interface QuoteToolTipProps extends Omit<QuoteProps, 'type'> {
    type: 'quote-tooltip';
    text: string;
    tip: string;
    source: string;
}

// subTexts can be either plain text, quote or quote with tooltip
type SubText = TextSubText | QuoteProps | QuoteToolTipProps;

interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    aboveListHeader: [aboveListHeaderProps, aboveListHeaderProps];
    lists: [listProps[], listProps[]];
    subTexts?: [SubText, SubText];
    inverted?: boolean;
}

const TwoTitleListsLayout: React.FC<Props> = ({ header, aboveListHeader, lists, subTexts, inverted }: Props) => {
    return (
        <div className="slide--two-lists-layout">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                {lists.map((list, index) => (
                    <div key={index}>
                        <h1>{aboveListHeader[index].title}</h1>
                        {aboveListHeader[index].subTitle ? <p className="slide-list-subtitle">{aboveListHeader[index].subTitle}</p> : null}
                        <TitleList items={list} />
                        {subTexts ? (
                            subTexts[index].type === 'text' ? <p className="slide--two-lists-layout-subtext">{subTexts[index].text}</p> : null
                        ) : null}
                        {subTexts ? (
                            subTexts[index].type.startsWith('quote') ? <Quote quote={subTexts[index] as QuoteProps | QuoteToolTipProps} classes={['slide__list-subtext']} /> : null
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TwoTitleListsLayout;
