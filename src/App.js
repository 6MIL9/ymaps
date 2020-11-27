import React, { useState } from 'react';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { UserPlacemark } from './user-placemark/user-placemark';


const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5
};

const coordinates = [];

const placemarkProps = {
 
}

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
        <Map defaultState={mapData} onClick={onClickMap} height="600px" width="1000px" modules={[
          'templateLayoutFactory',
          'geoObject.addon.balloon',
          'clusterer.addon.balloon',
        ]}>
          {coordinates.map(coordinate => <UserPlacemark geometry={coordinate} key={coordinate[0]} user={{ id: 0 }} {...placemarkProps} />)}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
