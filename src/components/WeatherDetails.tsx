function WeatherDetails({ weather }) {
    return (
        <div>
            <p>{weather?.main?.temp}</p>
        </div>
    );
}

export default WeatherDetails;
