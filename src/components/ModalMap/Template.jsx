import React from 'react';

const template = () => {
   const arr = [
      { name: 1, position: [51.505, -0.09] },
      { name: 2, position: [51.505, -0.09] },
      { name: 3, position: [51.505, -0.09] },
      { name: 4, position: [51.505, -0.09] },
   ];
   return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={position}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
         <Marker position={position1}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
      </MapContainer>
   );
};

export default template;
