"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Cloud, CloudRain, Snowflake, Wind, Loader2 } from 'lucide-react';

interface WeatherData {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
    windspeedKmph: string;
  }[];
}

const WeatherIcon = ({ description }: { description: string }) => {
    const desc = description.toLowerCase();
    if (desc.includes('sun') || desc.includes('clear')) return <Sun className="w-10 h-10 text-yellow-400" />;
    if (desc.includes('cloud')) return <Cloud className="w-10 h-10 text-gray-400" />;
    if (desc.includes('rain') || desc.includes('drizzle')) return <CloudRain className="w-10 h-10 text-blue-400" />;
    if (desc.includes('snow') || desc.includes('sleet')) return <Snowflake className="w-10 h-10 text-sky-300" />;
    return <Cloud className="w-10 h-10 text-gray-400" />;
};


export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://wttr.in/Gangtok?format=j1')
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch weather:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
        <Card className="bg-background/50 backdrop-blur-sm border-dashed">
            <CardContent className="p-6 flex items-center justify-center gap-4">
                 <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                 <span className="text-muted-foreground">Loading Weather...</span>
            </CardContent>
        </Card>
    )
  }
  
  if (!weather) {
    return (
        <Card className="bg-destructive/10 border-destructive">
            <CardContent className="p-6">
                 <p className="text-center text-destructive-foreground">Could not load weather forecast.</p>
            </CardContent>
        </Card>
    )
  }

  const currentCondition = weather.current_condition[0];

  return (
    <Card className="bg-background/50 backdrop-blur-sm">
        <CardHeader>
            <CardTitle className="text-lg text-center font-semibold text-foreground">
                Current Weather in Gangtok
            </CardTitle>
        </CardHeader>
      <CardContent className="p-6 pt-0 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
        <div className="flex items-center gap-4">
            <WeatherIcon description={currentCondition.weatherDesc[0].value} />
            <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{currentCondition.temp_C}°C</p>
                <p className="text-muted-foreground font-medium">{currentCondition.weatherDesc[0].value}</p>
            </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
            <Wind className="w-6 h-6" />
            <span className="font-semibold">{currentCondition.windspeedKmph} km/h</span>
        </div>
      </CardContent>
    </Card>
  );
}
