import React, { useState } from 'react';
import './App.css';
import { YMaps, Map } from 'react-yandex-maps';
import { UserPlacemark } from './user-placemark/user-placemark';

const mapData = {
  center: [53.348156, 83.777736],
  zoom: 12
};

const App = () => {

  const [coordinates, setCoordinates] = useState([]);

  const onClickMap = e => {
    let coords = e.get('coords');
    setCoordinates([...coordinates, coords])
  }

  return (
    <div className='container'>
      <YMaps>
        <Map defaultState={mapData} onClick={onClickMap} height="600px" width="1000px">
          {coordinates.map((coordinate, index) => <UserPlacemark geometry={coordinate} key={index} />)}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
