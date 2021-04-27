import React from 'react';

const Weathers = ({weather}) => {
    return (
       <div>
           <img src="" alt=""/>
           <div>Город: {weather.name}</div>
           <div>Температура: {weather.main.temp}</div>
           <div>Скорость ветра:{weather.wind.speed}</div>
           <div>Влажность воздуха:{weather.main.humidity}</div>
           <div>Давление:{weather.main.pressure}</div>
       </div>
    );
};

export default Weathers;