import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

//higth order component, display custom component on modal
export default function ComponentModal({component, onClose, onSuccess, data, ...rest}) {
    return (
        <Modal isOpen={true} toggle={onClose} className={rest.className}>
          <ModalHeader toggle={onClose}>{rest.title}</ModalHeader>
          <ModalBody>
            {component}
          </ModalBody>
        </Modal>
    )
}
