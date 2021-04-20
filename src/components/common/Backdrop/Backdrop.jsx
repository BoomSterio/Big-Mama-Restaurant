import React from 'react'
import s from './Backdrop.module.css'

const Backdrop = ({ show, handleClick }) => show && <div className={s.backdrop} onClick={handleClick} />

export default Backdrop
