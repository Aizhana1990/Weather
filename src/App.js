import React, {useState, useEffect} from 'react'
import Weathers from "./components/Weathers";
import axios from "axios";

function App() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const [notFound,setNotFound] = useState()

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Dubai'}&appid=412cdcc631fb4225debe6b1c667533f5`)
            .then(result => {
                setWeather(result.data)
                setNotFound(false)
            })
            .catch(() => setNotFound (true))
    }
    const handleClick = () => {
        getWeather()
        setCity('')
    }
    useEffect(() => {
        getWeather()
    }, [])

    // Первый вариант

    // if (weather.main === undefined) {
    //     return 'Loading...'
    // }
    //
    // return (
    //     <div className="App">
    //         <input type="text" onChange={(e) => setCity(e.target.value)}/>
    //         <button>View</button>
    //         <Weathers weather={weather}/>
    //     </div>
    // );

    /// Второй вариант
    //
    return (
        <div>
            {weather.main === undefined ? 'Loading' :
                <div>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <button onClick={handleClick}>View</button>
                    {notFound && <div> Такой страны нет </div>}
                    {!notFound &&  <Weathers weather={weather}/>}
                </div>
            }
        </div>
    )

    // Третий вариант


}

export default App;
