import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

//higth order component, display custom component on modal
export default function ComponentModal({component, onClose, onSuccess, data, title, ...rest}) {
    return (
        <Modal isOpen={true} toggle={onClose} className={rest.className}>
          <ModalHeader toggle={onClose}><h3 style={{textAlign:"center"}}>{title}</h3></ModalHeader>
          <ModalBody>
            {component}
          </ModalBody>
        </Modal>
    )
}
