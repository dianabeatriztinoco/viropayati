import React, { useState } from 'react';
import YogaClassFrom from '../yogaClassForm/YogaClassForm'
import './index.css'
import { Modal } from '../../context/Modal'

function YogaClassFromModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='loginDiv-Button' onClick={() => setShowModal(true)}>Create Class</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <YogaClassFrom setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default YogaClassFromModal;