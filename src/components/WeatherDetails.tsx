function WeatherDetails({ data, city }) {
    const icon = data?.weather?.icon.replace('n', 'd');
    return (
        <div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <p>{data?.main?.temp}</p>
            <p>
                <img
                    src='./water-solid.svg'
                    style={{
                        filter: 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)',
                        width: '32px',
                    }}
                />
            </p>
            <p>
                <img
                    src='./wind-solid.svg'
                    style={{
                        filter: 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)',
                        width: '32px',
                    }}
                />
            </p>
        </div>
    );
}

export default WeatherDetails;
