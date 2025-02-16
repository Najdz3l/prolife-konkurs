interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    items: {title: string, text: string}[];
    image: { url: string; alt: string };
    inverted?: boolean;
}

import SlideHeader from "../components/SlideHeader";
import TitleList from "../components/TitleList";

const TitleListImageLayout: React.FC<Props> = ({ header, items, inverted, image }: Props) => {
    return (
        <div className="slide--text-with-image">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                <TitleList items={items} />
                <div className="slide__image-wrapper">
                    <img src={image.url} alt={image.alt} />
                </div>
            </div>
        </div>
    )
};

export default TitleListImageLayout;
