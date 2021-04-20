import React from 'react'
import s from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({show, modalClosed, children}) => {
  return (
    <>
      <Backdrop show={show} handleClick={modalClosed} />
      <div
        className={s.modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default Modal
