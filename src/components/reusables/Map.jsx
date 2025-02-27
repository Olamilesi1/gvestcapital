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

// import React from "react";

// export default function SimpleMap() {
//   return (
//     <div style={{ width: "100%", height: "50vh" }}>
//       <iframe
//         title="Gtext Location"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         loading="lazy"
//         allowFullScreen
//         referrerPolicy="no-referrer-when-downgrade"
//         src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=518+Westgreen+Blvd+Katy+Texas+77450`}
//       ></iframe>
//     </div>
//   );
// }

