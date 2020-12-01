import React, { useState, useEffect } from "react";
import { Placemark } from "react-yandex-maps";
import img from './exclamation.png'
import Modal from './../Modal/Modal';

class UserPlacemark extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <>
        <Placemark
          {...this.props}
          options={{
            iconLayout: 'default#image',
            iconImageHref: img,
            iconImageSize: [15, 35],
            ...this.props.options,
          }}
          onClick={(e) => { this.showModal(e) }}
        />
        <Modal onClose={this.showModal} show={this.state.show} coords={this.props.geometry} />
      </>
    );
  }
}

export { UserPlacemark }

