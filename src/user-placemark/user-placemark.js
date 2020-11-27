import React, {useState} from "react";
import { Placemark } from "react-yandex-maps";
import img from './exclamation.png'
import Modal from './../Modal/Modal';

const UserPlacemark = (props) => {

  return (
    <>
      <Placemark
        {...props}
        options={{
          iconLayout: 'default#image',
          iconImageHref: img,
          iconImageSize: [15, 35],
          ...props.options,
        }}
        onClick={() => {console.log(1)}}
      />
    </>
  )
}

export { UserPlacemark }
