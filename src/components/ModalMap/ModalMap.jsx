import React from 'react';
import { Modal, Card, Row, Col } from 'antd';
import './modalStyle.css';
import styled from 'styled-components';
import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet';

const ModalMap = ({ isModalVisible, setIsModalVisible }) => {
   const mapData = {
      center: [51.505, -0.091],
      zoom: 13,
   }
   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };
   return (
      <StyledModal
         visible={isModalVisible}
         onOk={handleOk}
         onCancel={handleCancel}
         footer={null}
         id="modalMap"
         width={1200}
      >
         <Card>
            <Row gutter={[16, 0]}>
               <Col span={16}>
                  <MapContainer
                     center={mapData.center}
                     zoom={mapData.zoom}
                     scrollWheelZoom={true}
                     id="map"
                     
                  >
                     <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                     <Marker position={[51.105, -0.09]}>
                        <Popup>
                           A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                     </Marker>
                  </MapContainer>
               </Col>
               <Col span={8} style={{ backgroundColor: 'pink' }}>
                  <h4>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quibusdam minus blanditiis veritatis laudantium fuga
                     voluptatum nostrum possimus consequuntur illo optio numquam
                     veniam, cumque necessitatibus nam. Itaque, doloribus
                     beatae, ex debitis sunt libero delectus voluptatum velit
                     fuga repellendus tempore earum blanditiis quo magnam veniam
                     aperiam deserunt saepe impedit officia officiis. Assumenda
                     quasi in veniam necessitatibus dicta corporis placeat
                     quaerat, nostrum, earum reiciendis sit minus, voluptatum
                     porro molestiae deserunt cum voluptate non deleniti maxime.
                     Facilis mollitia placeat odit dolorum soluta suscipit
                     repellat, modi quibusdam architecto, illo doloremque ad.
                     Perferendis, dicta? Praesentium, recusandae explicabo sequi
                     dolorem harum exercitationem. Corrupti quo quos nostrum
                     officiis?
                  </h4>
               </Col>
            </Row>
         </Card>
      </StyledModal>
   );
};

const StyledModal = styled(Modal)`
   .ant-modal-body {
      padding: 0;
   }
   .ant-card-body {
      margin-top: 20px;
   }
`;
export default ModalMap;
