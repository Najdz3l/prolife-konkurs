import BulletList from '../components/BulletList';
import SlideHeader from '../components/SlideHeader';

interface Props {
    header?: { title?: string, subTitle?: string, classes?: ('text-left' | 'text-center' | 'text-right')[] };
    list: { listTitle: string, items: string[] };
    image: { src: string, alt: string };
    inverted?: boolean;
};

const BulletListImageLayout: React.FC<Props> = ({ header, list, image, inverted }: Props) => {
    return (
        <div className="bullet-list-image">
            {header ? <SlideHeader {...header} /> : null}
            <div className={`slide__items ${inverted ? 'slide--inverted' : ''}`}>
                <div className="bullet-lists-image--lists">
                        <div className="bullet-lists-image--list">
                            <BulletList {...list} />
                        </div>
                </div>
                <div className="bullet-lists-image--image">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </div>
    );
};

export default BulletListImageLayout;
