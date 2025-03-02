import ErrorImage from '../assets/error.svg';

function Error() {
    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={style}>
            <img src={ErrorImage} alt='error' style={{ scale: '0.8' }} />
        </div>
    );
}

export default Error;
