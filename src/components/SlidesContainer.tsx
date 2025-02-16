import React from "react";

interface Props {
    slides: JSX.Element[];
}

const SlidesContainer: React.FC<Props> = ({ slides }: Props) => {
    return (
        <div className="slides-wrapper">
            {slides.map((slide, index) => (
                <React.Fragment key={index}>{slide}</React.Fragment>
            ))}
        </div>
    );
};

export default SlidesContainer;
