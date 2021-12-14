import React, { useState, useEffect } from 'react'
let style = {
    width: '100%',
    height: '100%',
    borderRadius: '5px'
}
export default function Weather() {
    let data;
    const [Weather, setWeather] = useState("kolkata");
    const [WeatherData, setWeatherData] = useState("");
    const getinfo = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${Weather}&units=metric&appid=b66a13be0fb48f8c8679e2e3bba10cb0`;
        let response = await fetch(url);
        data = await response.json();
        if (data.cod=="404") {
            alert("Please enter a valid city name");

        }
        else {
        
        //console.log(data);
        const { description } = data.weather[0];
        const { temp, humidity, pressure, feels_like } = data.main;
        const { speed } = data.wind;
        const { name } = data;
        const { country, sunset } = data.sys;
        const { lon, lat } = data.coord;
        const sunsett = new Date(sunset * 1000).toLocaleTimeString();
        const newWeatherData = {
            description,
            temp,
            humidity,
            pressure,
            feels_like,
            speed,
            name,
            country,
            sunsett,
            lon,
            lat,
        }
        setWeatherData(newWeatherData);}
        // console.log(newWeatherData);
    }
    useEffect(() => {
        getinfo();
    }, [])
    return (
        <>
            <div className="position-absolute py-3" style={style}>
                <div className="container bg-dark text-white py-3">

                    <div className="input-group mb-3">
                        <input type="search" className="form-control" placeholder="Type to search" value={Weather} required
                            onChange={(e) => setWeather(e.target.value)} />
                        <button className="btn btn-primary" type="button" id="button-addon2" onClick={getinfo}>Search</button>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-10 col-lg-8 col-xl-8">

                            <div className="card bg-dark"  >
                                <div className="bg-image">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw1.png"
                                        className="card-img"
                                        alt="weather"
                                    />
                                    <div className="mask"></div>
                                </div>
                                <div className="card-img-overlay text-dark p-9">
                                    <h4 className="mb-0">{WeatherData.name},{WeatherData.country}</h4>
                                    <p className="display-2 my-3">{WeatherData.temp}&deg;C</p>
                                    <p className="mb-2">Feels Like: <strong>{WeatherData.feels_like} °C</strong></p>
                                    <h5>{WeatherData.description}</h5>
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-2">Humidity: <strong>{WeatherData.humidity}%</strong></p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-2">Wind Speed: <strong>{WeatherData.speed} m/s</strong></p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-2">Pressure: <strong>{WeatherData.pressure} hPa</strong></p>
                                        </div>
                                    </div>
                                    <p className="mb-1">Sunset: <strong>{WeatherData.sunsett}</strong></p>


                                    <div className="position-absolute bottom-0 end-0">
                                        {new Date().toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

