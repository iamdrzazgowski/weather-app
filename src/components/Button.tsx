function Button({ children, type, clasName }) {
    return (
        <button type={type} className={clasName}>
            {children}
        </button>
    );
}

export default Button;
