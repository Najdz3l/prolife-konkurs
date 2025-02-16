import React from 'react';

interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    texts: string[];
    toolTips?: [placeholder: string, toolTipComponent: JSX.Element][];
    image: { url: string; alt: string };
    inverted?: boolean;
}

import useToolTipText from '../../../hooks/useToolTipText';

import SlideHeader from "../components/SlideHeader";

const TextImageLayout: React.FC<Props> = ({ header, texts, image, inverted, toolTips }: Props) => (
    <div className="slide--text-with-image">
        {header ? <SlideHeader {...header} /> : null}
        <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
            <div className='paragraph-wrapper'>
                {texts.map((text, index) =>
                <p key={index}>
                    {useToolTipText(text, toolTips ? toolTips : [])}
                </p>
                )}
            </div>
            <div className="slide__image-wrapper">
                <img src={image.url} alt={image.alt} />
            </div>
        </div>
    </div>
);

export default TextImageLayout;
