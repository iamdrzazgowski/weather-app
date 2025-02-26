function WeatherDetails({ data }) {
    const icon = data?.weather?.icon.replace('n', 'd');
    return (
        <div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <p>{data?.main?.temp}</p>
        </div>
    );
}

export default WeatherDetails;
