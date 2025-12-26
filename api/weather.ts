// Vercel Serverless Function for OpenWeather API
// このファイルは /api/weather エンドポイントとして動作します
// Vercelでは /api/weather.ts が自動的に /api/weather として認識されます

import type { VercelRequest, VercelResponse } from '@vercel/node';

interface OpenWeatherResponse {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  weather: Array<{
    main: string;
  }>;
  name: string;
}

interface WeatherResponse {
  location: string;
  temp: number;
  pressure: number;
  wind: number;
  cloud: number;
  humidity: number;
  rain: boolean;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // CORS設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'OpenWeather API key is not configured' });
    return;
  }

  const city = (req.query.city as string) || 'Tokyo';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`OpenWeather API error: ${response.status}`);
    }

    const data: OpenWeatherResponse = await response.json();

    // 必要最小のデータのみ返す
    const weatherResponse: WeatherResponse = {
      location: data.name,
      temp: Math.round(data.main.temp * 10) / 10, // 小数点第1位まで
      pressure: data.main.pressure,
      wind: Math.round(data.wind.speed * 10) / 10, // 小数点第1位まで
      cloud: data.clouds.all,
      humidity: data.main.humidity,
      rain: data.weather.some(w => w.main.toLowerCase().includes('rain')),
    };

    res.status(200).json(weatherResponse);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}


