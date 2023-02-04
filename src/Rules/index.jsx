import { useState } from 'react';
import Modal from 'react-modal';

function Rules() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className='rulesButton' >
      <button onClick={() => setModalIsOpen(true)}>
        Rules
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className='rules'>
          <p>Rules</p>
          <img className='imgModal' src="/images/image-rules-bonus.svg" alt="Rules" />
          <button onClick={() => setModalIsOpen(false)}>
            X
          </button>
        </div>
      </Modal>
    </section>
  )
}

export default Rules