import SlideHeader from "../components/SlideHeader";
import useToolTipText from "../../../hooks/useToolTipText";

interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    image: { url: string; alt: string };
    texts: string[];
    toolTips?: [placeholder: string, toolTipComponent: JSX.Element][];
    QuestionComponent: JSX.Element;
    inverted?: boolean;
}

const TextQuestionWithImageLayout: React.FC<Props> = ({ header, texts, toolTips, image, inverted, QuestionComponent: Question } : Props) => {
    return (
        <div className = "slide--text-question-with-image">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                <div className="slide--text-question-with-image__content">
                    <div>
                    {texts.map((text, index) =>
                    <p key={index}>
                        {useToolTipText(text, toolTips ? toolTips : [])}
                    </p>
                    )}
                    </div>
                    {Question}
                </div>
                <div className="slide__image-wrapper">
                    <img src={image.url} alt={image.alt} />
                </div>
            </div>
        </div>
    );
}

export default TextQuestionWithImageLayout;
