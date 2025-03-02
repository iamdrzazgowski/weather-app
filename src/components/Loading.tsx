function Loading() {
    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={style}>
            <div className='spinner'></div>;
        </div>
    );
}

export default Loading;
