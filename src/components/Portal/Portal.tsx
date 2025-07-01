import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import * as SC from "./PortalStyled"

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const portalRoot = document.getElementById("menuPortal-root");
  if (!portalRoot) return null;

  return createPortal(
    <SC.PortalOverlay className="modal-overlay">
      {children}
    </SC.PortalOverlay>,
    portalRoot
  );
};

export default Modal;