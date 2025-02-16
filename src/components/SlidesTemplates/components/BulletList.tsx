interface Props {
    listTitle: string;
    items: string[];
}

const BulletList: React.FC<Props> = ({ listTitle, items }: Props) => {
    return (
        <>
            <h2>{listTitle}</h2>
            <ul className="bullet-list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            listStyleType: 'disc',
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BulletList;
