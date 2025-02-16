import BulletList from '../components/BulletList';
import SlideHeader from '../components/SlideHeader';

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
    header?: { title?: string, subTitle?: string };
    lists: [
        { listTitle: string, items: string[] },
        { listTitle: string, items: string[] }
    ];
    text: string;
    quote?: QuoteType;
    inverted?: boolean;
};

const TwoBulletListsTextLayout: React.FC<Props> = ({ header, lists, text, inverted }: Props) => {
    return (
        <div className="two-lists-image">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                <div className="two-lists-image__lists">
                    {lists.map((list, index) => (
                        <div key={index} className="two-lists-image--list">
                            <BulletList {...list} />
                        </div>
                    ))}
                </div>
                {text}
            </div>
        </div>
    );
};

export default TwoBulletListsTextLayout;
