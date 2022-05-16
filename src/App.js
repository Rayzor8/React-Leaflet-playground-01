import React, { useState } from 'react';
import './App.css';
import ModalButton from './components/ModalMap/ModalButton';
import ModalMap from './components/ModalMap/ModalMap';

function App() {
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
      setIsModalVisible(true);
   };
   return (
      <div className="App">
         <h1>Test</h1>
         <ModalButton showModal={showModal} />
         <ModalMap
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
         />
      </div>
   );
}

export default App;
