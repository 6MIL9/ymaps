import React from "react";
import $ from 'jquery';
import { Placemark, withYMaps } from "react-yandex-maps";
import { UserPlacemarkBalloon } from './user-placemark-balloon';
import { UserPlacemarkIcon } from './user-placemark-icon'



function UserPlacemark(props) {
  const UserPlacemarkCore = React.memo(({ ymaps }) => {
    const makeLayout = (layoutFactory) => {
      const Layout = layoutFactory.createClass(
        UserPlacemarkBalloon(props),
        {
          build: function () {
            Layout.superclass.build.call(this);

            this.element = $('.map__placemark-balloon', this.getParentElement());
            this.element
              .find('#placemark-balloon__profile-btn_user-id_' + props.user.id)
              .on('click', { user: this.user }, $.proxy(this.myClick, this));
          },

          clear: function () {
            this.element
              .find('#placemark-balloon__profile-btn_user-id_' + props.user.id)
              .off('click');

            Layout.superclass.clear.call(this);
          },

          user: props.user,
          myClick: props.myClick,
        },
      );
      return Layout;
    };

    const makeLayoutIcon = (layoutFactory) => {
      const LayoutIcon = layoutFactory.createClass(
        UserPlacemarkIcon(props),
        {
          build: function () {
            LayoutIcon.superclass.build.call(this);

            this.element = $('.map__placemark-icon', this.getParentElement());

          },

          clear: function() {

            LayoutIcon.superclass.clear.call(this);
          },
        },
      );
      return LayoutIcon;
    };

    return (
      <Placemark
        {...props}
        options={{
          balloonContentLayout: makeLayout(ymaps.templateLayoutFactory),
          iconLayout: makeLayoutIcon(ymaps.templateLayoutFactory),
          // iconImageHref: 'exclamation.svg',
          balloonPanelMaxMapArea: 0,
          ...props.options,
        }}
      />
    );
  });

  const UserPlacemark = React.useMemo(() => {
    return withYMaps(
      UserPlacemarkCore,
      true,
      ["geoObject.addon.balloon", "templateLayoutFactory"]);
  }, [UserPlacemarkCore]);
  return <UserPlacemark />;
}

export { UserPlacemark }