import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';

const KEY = import.meta.env.VITE_API_KEY;

function App() {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<object | null>(null);
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
        <div className='container'>
            <WeatherForm onSubmit={handleFormSubmit} />

            {!isLoading && weather && (
                <WeatherDetails data={weather} city={city} />
            )}

            {isLoading && <Loading />}
            {error && <ErrorMessage />}
        </div>
    );
}

export default App;
