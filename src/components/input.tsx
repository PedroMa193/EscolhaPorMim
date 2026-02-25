interface Props{
    placeholder?: string,
    onChange?: (e: any) => void,
    value?: string,
}

export default function Input({placeholder, onChange, value}:Props){
    return(
        <input onChange={onChange} value={value} className="px-2 py-1 rounded-lg border-solid border-2 border-ocean-dark text-ocean-dark text-lg font-semibold" placeholder={placeholder}/>
    )
}