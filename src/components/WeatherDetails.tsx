import WindIcon from './icons/WindIcon';
import WaterIcon from './icons/WaterIcon';

function WeatherDetails({ data, city }) {
    const icon = data?.weather?.icon.replace('n', 'd');

    console.log(data);
    return (
        <div>
            <div className='image-container center-box'>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    className='weather-icon'
                />
            </div>

            <div className='city-container center-box'>
                <p className='temp'>{Math.ceil(data?.main?.temp)}&#176;c</p>
                <p className='location'>
                    {data?.weather?.description.charAt(0).toUpperCase() +
                        data?.weather?.description.slice(1)}
                </p>
            </div>

            <div className='details-container'>
                <div className='humidity-details'>
                    <WaterIcon />
                    <div>
                        <p>{data?.main?.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>

                <div className='wind-details'>
                    <WindIcon />
                    <div>
                        <p>{Math.round(data?.wind?.speed)} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;
