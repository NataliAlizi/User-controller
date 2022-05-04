// import React from 'react';
// import Component from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// class MapContainer extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 }],
//             mapStyles: {
//                 width: '400px',
//                 height: '400px'
//             }
//         }
//     }

    
//     displayMarkers = () => {
//         return this.state.stores.map((store, index) => {
//             return <Marker key={index} id={index} position={{
//                 lat: store.latitude,
//                 lng: store.longitude
//             }}
//                 onClick={() => console.log("You clicked me!")} />
//         })
//     }

//     render() {
//         return (
//             <Map
//                 google={this.props.google}
//                 zoom={8}
//                 style={this.state.mapStyles}
//                 initialCenter={{ lat: 47.444, lng: -122.176 }}
//             >
//                 <Marker position={{ lat: 48.00, lng: -122.00 }} />
//             </Map>
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyAYGH2pNCnPizduySeAopYHExQjEOI56NI'
// })(MapContainer);