import React, { useState, useRef, useEffect } from 'react';
import '../styles/ToolTip.css'

interface ToolTipProps {
    text: string;
    tip: string;
    source: string;
    classes?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ text, tip, source, classes }: ToolTipProps) => {
    const [position, setPosition] = useState<'' | 'below'>('');
    const containerRef = useRef<HTMLSpanElement>(null);
    const [ignore, setIgnore] = useState(false);

    // Function to get the tooltip box
    const getToolTipBox = () => {
        if (!containerRef.current) return;

        // Get the children of the tooltip container
        const children = Array.from(containerRef.current.children);

        // Get the tooltip box
        const toolTipBox = children.find((child) => child.classList.contains('tooltip--content')) as HTMLElement;

        return toolTipBox;
    };

    // Function to handle the position of the tooltip
    const handlePosition = () => {
        if (!containerRef.current) return;
        const toolTipBox = getToolTipBox() as HTMLElement;
        if (!toolTipBox) return;

        // Get the height of the tooltip box
        const height = toolTipBox.getBoundingClientRect().height;

        // Get the distance from the top of the container
        const distanceFromTop = containerRef.current.getBoundingClientRect().top;

        const headerHeight = 85; // 5.3125rem
        const padding = 48;

        if (distanceFromTop - headerHeight - height - padding < 0) {
            setPosition('below');
        }
        else {
            setPosition('');
        }
    };

    // Function to handle the hover event
    const handleHover = () => {
        if (ignore) return;
        handlePosition(); // Set the position of the tooltip
    };

    // Check the window width and set the ignore state
    useEffect(() => {
        const handleResize = () => {
            // If the window width is less than 32rem, ignore the hover event
            if (window.innerWidth <= (32 * 16)) {
                setIgnore(true);
            } else {
                setIgnore(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <span className="tooltip__container" ref={containerRef} onMouseOver={handleHover}>
            <span className={`tooltip--content ${position} ${ignore ? 'ignore-hover' : ''}`}>
                {tip}
            </span>
            <span className={`tooltip--text ${classes ? classes : ''}`}>
                <a href={source} target='__blank'><i>{text}</i></a>
            </span>
        </span>
    );
};

export default ToolTip;
