import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { IModalProps } from "interfaces/modalC";
export default function ModalC({
  children,
  button,
  visible,
  closeHandler,
  title,
}: IModalProps) {
  return (
    <>
      {button}
      <Modal closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
