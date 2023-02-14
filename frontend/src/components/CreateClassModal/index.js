import React, { useState } from 'react';
import YogaClassFrom from '../yogaClassForm/YogaClassForm'
import './index.css'
import { Modal } from '../../context/Modal'

function YogaClassFromModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='loginDiv-Button' onClick={() => setShowModal(true)}>Host a Class!</button>
      {showModal && (
        <div className="createYogaClassModal">
        <Modal onClose={() => setShowModal(false)}>
          <YogaClassFrom setShowModal={setShowModal}/>
        </Modal>
        </div>
      )}
    </>
  );
}

export default YogaClassFromModal