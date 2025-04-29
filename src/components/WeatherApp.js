import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardBody, CardSubtitle } from "reactstrap";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity]=useState("DIYARBAKIR")
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const cities = [
    "ADANA", "ADIYAMAN", "AFYONKARAHISAR", "AGRI", "AKSARAY", "AMASYA", "ANKARA", "ANTALYA", "ARDAHAN", "ARTVIN",
    "AYDIN", "BALIKESIR", "BARTIN", "BATMAN", "BAYBURT", "BILECIK", "BINGOL", "BITLIS", "BOLU", "BURDUR",
    "BURSA", "CANAKKALE", "CANKIRI", "CORUM", "DENIZLI", "DIYARBAKIR", "DUZCE", "EDIRNE", "ELAZIG", "ERZINCAN",
    "ERZURUM", "ESKISEHIR", "GAZIANTEP", "GIRESUN", "GUMUSHANE", "HAKKARI", "HATAY", "IGDIR", "ISPARTA", "ISTANBUL",
    "IZMIR", "K.MARAS", "KARABUK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERI", "KIRIKKALE", "KIRKLARELI", "KIRSEHIR",
    "KILIS", "KOCAELI", "KONYA", "KUTAHYA", "MALATYA", "MANISA", "MARDIN", "MERSIN", "MUGLA", "MUS",
    "NEVSEHIR", "NIGDE", "ORDU", "OSMANIYE", "RIZE", "SAKARYA", "SAMSUN", "SIIRT", "SINOP", "SIVAS",
    "SANLIURFA", "SIRNAK", "TEKIRDAG", "TOKAT", "TRABZON", "TUNCELI", "USAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"
  ];
  console.log("City", city)
  
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6b6a52a22d0c882171356d8706b1abd6&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [city]);
  console.log(weatherData);
  if (!weatherData) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <div>
      <h2>WeatherApp</h2>
      <h4>The Weather of {city} </h4>

      <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Select a City
      </button>
      <ul class="dropdown-menu drop-size">
        {cities.map(c=> <li><button onClick={() => setCity(c)}className="dropdown-item">{c}</button></li>)}
        
      </ul>
      </div>
      
      {weatherData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item, index) => {
          const date = new Date(item.dt_txt);
          const dayName = days[date.getDay()];
          return (
            <Card className="card">
              <img alt="Sample" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
              <CardBody>
                <CardTitle tag="h5">{dayName}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Temp: {item.main.temp}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Feel: {item.main.feels_like}
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
}
