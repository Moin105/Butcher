import React from "react";
import styles from '../styles/Home.module.css'

function Modal(props) {
  return (
    <div className={styles.overlays} onClick={()=>{props.setShow(false)}}>

      <div className={styles.modals}>{props.message}</div>
    </div>
  );
}

export default Modal;