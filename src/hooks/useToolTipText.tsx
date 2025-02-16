import React from 'react';

const useToolTipText = (text: string, toolTips: [string, React.ReactNode][]) => {
    if (!toolTips) return text;

    // Split the text by the placeholders and filter out the empty strings
    const parts = text.split(/(\{[^}]+\})/).filter(Boolean);

    return (
        <>
            {parts.map((part, index) => {
                // Check if the part is a placeholder
                const match = part.match(/\{([^}]+)\}/);
                if (match) {
                    // Find the tooltip for the placeholder
                    const toolTip = toolTips.find(([placeholder]) => placeholder === match[1]);
                    // If the tooltip is found, display it, otherwise display the part
                    return toolTip ? <React.Fragment key={index}>{toolTip[1]}</React.Fragment> : part;
                }
                return part;
            })}
        </>
    );
};

export default useToolTipText;
