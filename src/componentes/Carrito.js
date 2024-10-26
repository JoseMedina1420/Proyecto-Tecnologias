import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { MdRemoveShoppingCart } from "react-icons/md";

function Carrito() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover Right</Popover.Header>
      <Popover.Body>
        Here's some <strong>amazing</strong> content. It's very engaging, right?
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="d-flex justify-content-end"> {/* Alinea el botón a la derecha */}
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button variant="success"><MdRemoveShoppingCart size={50}/>
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Carrito;

