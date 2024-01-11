import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const ConfirmationModal = ({ isOpen, toggle, onConfirm, message }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onConfirm}>
          Yes
        </Button>
        <Button color="secondary" onClick={toggle}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
