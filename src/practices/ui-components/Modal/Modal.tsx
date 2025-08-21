import { createPortal } from "react-dom";
import "./index.css";

interface ModalProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
