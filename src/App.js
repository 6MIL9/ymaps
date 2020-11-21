import React, { useEffect, useState  } from 'react';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];

const App = () => {
  const [count, setCount] = useState(false);

  const onClickMap = e => {
    let coords = e.get('coords');
    coordinates.push(coords)
    console.log(coordinates)
    setCount(!count)
  }

  return (
    <div className='container'>
      <YMaps>
        <Map defaultState={mapData} onClick={onClickMap} style={{
          height: 500,
          width: 900
        }}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} key={coordinate[0]} />)}
        </Map>
        {console.log('otrisovka')}
      </YMaps>
    </div>
  );
}

export default App;
