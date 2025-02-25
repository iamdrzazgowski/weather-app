import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';

const KEY = import.meta.env.VITE_API_KEY;

function App() {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const fetchWeather = async (city) => {
        setError('');

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
            );

            if (!response.ok) throw new Error('City not found');

            const data = await response.json();
            setWeather(data);
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFormSubmit = (city) => {
        setCity(city);
        fetchWeather(city);
    };

    return (
        <div className='container'>
            <WeatherForm onSubmit={handleFormSubmit} />
            <WeatherDetails weather={weather} />
        </div>
    );
}

export default App;
