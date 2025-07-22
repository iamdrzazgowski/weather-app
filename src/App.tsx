import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import { WeatherData } from './types/WeatherData';

const KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchWeather = async (city: string) => {
        setError('');

        if (!city) {
            setError('City is required');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
            );

            if (!response.ok) throw new Error('City not found');

            const data = await response.json();
            setWeather({
                main: data?.main,
                weather: { ...data?.weather[0] },
                wind: data?.wind,
            });
        } catch (error) {
            setError((error as Error).message);
            setWeather(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (city: string) => {
        setCity(city);
        fetchWeather(city);
    };

    return (
        <div className={`container ${!city ? 'auto-height' : ''}`}>
            <WeatherForm onSubmit={handleFormSubmit} />

            {!isLoading && weather && <WeatherDetails data={weather} />}

            {isLoading && <Loading />}
            {error && <ErrorMessage />}
        </div>
    );
}

export default App;
