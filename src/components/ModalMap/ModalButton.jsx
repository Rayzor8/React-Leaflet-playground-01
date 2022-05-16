import React, { useState } from 'react';
import { Button } from 'antd';

const ModalButton = ({ showModal }) => {
   return (
      <Button type="primary" onClick={() => showModal()}>
         Click Me
      </Button>
   );
};

export default ModalButton;
