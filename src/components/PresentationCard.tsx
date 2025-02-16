import React from "react";
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    description: string;
    image: { url: string; alt: string };
    btnText: string;
    pathname: string;
}

const PresentationCard: React.FC<Props> = ({ title, description, image, btnText, pathname }: Props) => {
  return (
    <div className={'card m-t'}>
        <img src={image.url} alt={image.alt} />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
            <Link to={pathname}><button className="btn-primary">{btnText}</button></Link>
        </div>
    </div>
  );
};

export default PresentationCard;
