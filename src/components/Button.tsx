function Button({
    children,
    type,
    clasName,
}: {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    clasName?: string;
}) {
    return (
        <button type={type} className={clasName}>
            {children}
        </button>
    );
}

export default Button;
