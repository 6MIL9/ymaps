import React, { useState } from 'react';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { UserPlacemark } from './user-placemark/user-placemark';
import logo from './logo.svg';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5
};

const coordinates = [];

const placemarkProps = {
  properties: {
    balloonContent: 'Это балун'
  },
  modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
}

const myClick = () => {
  alert(1)
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
          {/* {coordinates.map(coordinate => <Placemark geometry={coordinate} key={coordinate[0]} {...placemarkProps} />)} */}
          {coordinates.map(coordinate => <UserPlacemark geometry={coordinate} key={coordinate[0]} myClick={myClick} user={{ id: 0 }} {...placemarkProps} />)}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
