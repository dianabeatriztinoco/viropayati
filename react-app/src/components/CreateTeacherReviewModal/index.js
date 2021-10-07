import React, { useState } from 'react';
import TeacherReviewForm from '../yogaClassForm/YogaClassForm'
import './index.css'
import { Modal } from '../../context/Modal'

function TeacherReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='loginDiv-Button' onClick={() => setShowModal(true)}>Leave a Review!</button>
      {showModal && (
        <div className="createYogaClassModal">
        <Modal onClose={() => setShowModal(false)}>
          <TeacherReviewForm setShowModal={setShowModal}/>
        </Modal>
        </div>
      )}
    </>
  );
}

export default TeacherReviewFormModal;