import {ReactNode, useEffect, useState} from "react";
import {MdClose} from "react-icons/md";

interface ModalProps {
  isOpen: boolean
  title: string
  body: ReactNode,
  onClose: () => void
}

const Modal = ({isOpen, title, body, onClose}: ModalProps) => {

  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${!isOpen && 'hidden'}`}>
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button className="text-black" onClick={() => onClose()}>
            <MdClose className="h-[20px] w-[20px]"/>
          </button>
        </div>
        {body}
      </div>
    </div>
  )
}

export default Modal;
