import BulletList from '../components/BulletList';
import SlideHeader from '../components/SlideHeader';

interface Props {
    header?: { title?: string, subTitle?: string };
    lists: [
        { listTitle: string, items: string[] },
        { listTitle: string, items: string[] }
    ];
    image: { src: string, alt: string };
    inverted?: boolean;
};

const TwoListsImage: React.FC<Props> = ({ header, lists, image, inverted }: Props) => {
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
                <div className="slide__image-wrapper">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </div>
    );
};

export default TwoListsImage;
