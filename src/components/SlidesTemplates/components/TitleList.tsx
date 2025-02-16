interface TitleListProps {
    items: { title: string, text: string }[];
}

const TitleList: React.FC<TitleListProps> = ({ items }: TitleListProps) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <span className="item--title">{item.title}</span>
                    {item.text}
                </li>
            ))}
        </ul>
    );
}

export default TitleList;
