import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(import.meta.env);

export const CardWeather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const city = 'Москва';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/current.json',
          {
            params: {
              key: API_KEY,
              q: city
            }
          }
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке погоды:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Погода в {weather.location.name}</h2>
      <p>Температура: {weather.current.temp_c}°C</p>
      <p>Состояние: {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt='Иконка погоды' />
    </div>
  );
};
