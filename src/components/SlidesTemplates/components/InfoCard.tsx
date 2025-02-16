import useToolTipText from "../../../hooks/useToolTipText";

interface Props {
    image: { url: string};
    title: string
    text: string;
    // Array of Arrays with placeholder and tooltip component
    toolTips?: [placeholder: string, toolTipComponent: JSX.Element][];
}

const InfoCard: React.FC<Props> = ({ image, title, text, toolTips }: Props) => (
    <div className={'card transparent'}>
        <img src={image.url} alt="" className='icon' aria-hidden='true' />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{useToolTipText(text, toolTips ? toolTips : [])}</p>
        </div>
    </div>
);

export default InfoCard;
