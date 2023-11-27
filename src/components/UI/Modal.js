import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


//  ! This was commented because we are using a portal to render the modal overlay component.
// const Model = (props) => {
//     return (
//         <Fragment>
//             <Backdrop>
//                 {/* //!  props.children is the content of the modal forwarded from the ModalOverlay component */}
//                 <ModalOverlay >{props.children}</ModalOverlay>
//             </Backdrop>
//         </Fragment>
//     );
// }

/**
 * Renders a modal component.
 *
 * @param {object} props - The properties for the modal.
 * @return {JSX.Element} The rendered modal component.
 * ! Portal to render the modal overlay component
 */

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
