import React from "react";


export default iconClassName => {
    const Icon = ({ className="", iconRef, children, ...props }) => (
        <i
            ref={iconRef}
            className={`icon ${iconClassName} ${className}`}
            {...props}
        >
            {children}
        </i>
    );

    return React.memo(Icon);
};