import './button.css'

const Button = ({onClick, children}) => {
    return (
        <button type='button' onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </button>
    )
}

export default Button;