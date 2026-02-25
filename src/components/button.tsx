interface Props {
    text?: string,
    leftIcon?: string,
    rightIcon?: string,
    variety?: "main" | "secundary",
    width?: string,
    height?: string,
    onClick?: () => void,
}

export default function Button({text, leftIcon, rightIcon, variety = "main", width = "100", height = "50", onClick}: Props){
    let classStyle;
    
    switch (variety){
        case "main":
            classStyle = "capitalize cursor-pointer bg-ocean-dark border-ocean-deep border-2 border-solid text-ocean-light rounded-md font-bold text-lg ";
            break;
        case "secundary":
            break;
    }

    return (
        <button onClick={onClick} className={`${classStyle}`} style={{width: `${width}px`, height: `${height}px`}}>
            {leftIcon}
            {text}
            {rightIcon}
        </button>
    )
}