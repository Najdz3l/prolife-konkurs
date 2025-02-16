interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    cards: { image: { url: string}, title: string, text: string }[];
    // Array of Arrays with placeholder and tooltip component
    toolTips?: [placeholder: string, toolTipComponent: JSX.Element][][];
    classes?: string[];
}

import InfoCard from "../components/InfoCard";
import SlideHeader from "../components/SlideHeader";

const InfoCardLayout: React.FC<Props> = ({ header, cards, toolTips }: Props) => (
    <div className="slide--info-card-layout">
        {header ? <SlideHeader {...header} /> : null}
        <div className="slide__items">
            <div className="cards__container">
                {cards.map((card, index) => (
                    <InfoCard key={index} {...card} toolTips={toolTips?.[index] || []} />
                ))}
            </div>
        </div>
    </div>
);

export default InfoCardLayout;
