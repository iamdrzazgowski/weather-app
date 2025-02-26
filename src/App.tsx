import { useEffect, useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';

const KEY = import.meta.env.VITE_API_KEY;

function App() {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const fetchWeather = async (city) => {
        setError('');

        if (!city) return;

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
            );

            if (!response.ok) throw new Error('City not found');

            const data = await response.json();
            setWeather({
                main: data.main,
                weather: { ...data?.weather[0] },
                wind: data.wind,
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFormSubmit = (city) => {
        setCity(city);
        fetchWeather(city);
    };

    useEffect(() => {
        fetchWeather('London');
    }, []);

    return (
        <div className='container'>
            <WeatherForm onSubmit={handleFormSubmit} />
            <WeatherDetails data={weather} />
        </div>
    );
}

export default App;
