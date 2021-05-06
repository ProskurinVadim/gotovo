import React from "react"

const Button = ({onClick,className,preventDefault,text}) => (
    <button className={className} onClick={(e)=> {
        preventDefault && e.preventDefault();
        onClick(e)
    }}>
        {text}
    </button>
);

export default Button