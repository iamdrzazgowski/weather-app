import WindIcon from './icons/WindIcon';
import WaterIcon from './icons/WaterIcon';

function WeatherDetails({ data, city }) {
    const icon = data?.weather?.icon.replace('n', 'd');
    return (
        <div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <p>{data?.main?.temp}</p>
            <p>
                <WaterIcon />
            </p>
            <p>
                <WindIcon />
            </p>
        </div>
    );
}

export default WeatherDetails;
