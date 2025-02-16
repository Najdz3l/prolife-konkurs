interface Props {
    title?: string
    subTitle?: string;
    classes?: ('text-left' | 'text-center' | 'text-right')[];
}

const SlideHeader: React.FC<Props> = ({ title, subTitle, classes }: Props) => (
    <>
        { title || subTitle ?
            <div className={`slide__header ${classes? classes.join(' ') : ''}`}>
                {title ? <h1 className="slide__header__title">{title}</h1> : null}
                {subTitle ? <p className="slide__header__subTitle">{subTitle}</p> : null}
            </div>
        : null}
    </>
);

export default SlideHeader;