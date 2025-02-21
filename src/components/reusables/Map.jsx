import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}


// const handleApiLoaded = (map, maps) => {
//     // use map and maps objects
//   };
  
//   ...
  
//   <GoogleMapReact
//     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//     defaultCenter={this.props.center}
//     defaultZoom={this.props.zoom}
//     yesIWantToUseGoogleMapApiInternals
//     onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//   >
//     <AnyReactComponent
//       lat={59.955413}
//       lng={30.337844}
//       text="My Marker"
//     />
//   </GoogleMapReact>