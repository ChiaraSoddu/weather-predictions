import { useState } from 'react'

const WeatherPage = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const searchLocation = (e) => {
      
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=e0b40cfbc1de3d6563e3cc9fe92fb09e')
        .then(response => response.json()).then((response) => {
        setData(response)
        console.log(response.data)
      })
      setLocation('')  
    }

    return(
    <div className="PageW">
        <div className="search">
            <input type="text"
            value={location}
            onChange= {e => setLocation(e.target.value)}
            placeholder='Cerca la tua città'
             />  
             <button onClick={searchLocation}>Cerca</button> 
        </div>
      <div className="top">
        <div className="location">{data.name}</div>
        <div className="temp">
            
            {data.main ? <h1>
                <p>Temperatura:</p>{data.main.temp} °F</h1> : null}
        </div>
        <div className="description"> {data.weather ? <p>{data.weather[0].main}</p>: null}</div>
      </div>
      <div className="bottom">
        <div className="feels">
        {data.main ? <h1>
            <p id='small'>Percepita:</p>{data.main.feels_like} °F</h1> : null}
        </div>
        <div className="humidity">{data.main ? <h1><p id='small'>umidità</p>{data.main.humidity} %</h1> : null}</div>
        <div className="wind">{data.wind ? <h1><p id='small'>Velocità vento</p>{data.wind.speed} MPH</h1> : null}</div>
      </div>
    </div>
    )
}

export default WeatherPage
