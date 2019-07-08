import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


interface props{
  className? :string
  component :React.FunctionComponentElement<{}>, 
  onClose :CallableFunction, 
  onSuccess :CallableFunction, 
  title? :string
}

const ComponentModal = (props:props) :React.FunctionComponentElement<props>=>{

  let title = (string :string) =><ModalHeader toggle={()=>props.onClose()}><h3 style={{textAlign:"center"}}>{title}</h3></ModalHeader>
  let content = <>
    <Modal isOpen={true} toggle={()=>props.onClose()} className={props.className||""}>
      {props.title?title(props.title):""}
      <ModalBody>
        {props.component}
      </ModalBody>
    </Modal>
  </>

  return content;
}

export default ComponentModal;