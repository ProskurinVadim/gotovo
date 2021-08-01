import React from "react"

const Button = ({onClick,className,preventDefault,text,styleProps}) => {
    console.log(styleProps)
    return <button className={className} style={styleProps} onClick={(e) => {
        preventDefault && e.preventDefault();
        onClick(e)
    }}>
        {text}
    </button>
}

export default Button