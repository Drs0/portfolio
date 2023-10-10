const Button = ({ isPrimary, children, onClick = () => { }, type = 'button', send = false }) => {
    let isSend = send ? 'is--send' : '';
    let roleClass = isPrimary ? 'primary' : 'secondary';
    return (
        <button onClick={onClick} className={`prfl__btn btn--${roleClass} ${isSend}`}>{children}</button>
    );
};
export default Button;