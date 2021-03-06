import classes from './Modal.module.css';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';


const Backdrop = _ => {
    return <div className={classes.backdrop}/>
}

const ModalOverlay = props => {

    return (<div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>)
}
const portalElement= document.querySelector('#overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}


export default Modal;
