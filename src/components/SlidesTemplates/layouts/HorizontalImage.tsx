interface Props {
    image: { url: string; alt: string };
}

const HorizontalImage: React.FC<Props> = ({ image }: Props) => (
    <div className="slide--horizontal-image">
        <img id="full-size" src={image.url} alt={image.alt} />
    </div>
);

export default HorizontalImage;
