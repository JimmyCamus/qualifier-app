import { ReactNode } from "react";

type ModalEntries = {
  id: string;
  label: string;
  children: ReactNode;
};

const Modal = ({ id, label, children }: ModalEntries) => {
  return (
    <>
      <label htmlFor={id} className="btn btn-primary">
        {label}
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
