import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide} />;     //onClick is built in, using props instead of context is beeter because 
                                                                         // it makes the Backdrop reusable for other purposes
};

const ModalOverlay = (props) => {     //actual content passed
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');    //where to portal 

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onClose} />,
        portalElement
      )}
      {/* creat portal need a second argument */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
