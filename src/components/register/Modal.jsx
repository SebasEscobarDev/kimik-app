import srcLogo2 from "@/assets/images/logo.webp";
import srcLogoWhite from "@/assets/images/logo_white.png";
import srcClose from "@/assets/svgs/close.svg";
import { useForm } from "@/context/FormContext";
import { useGlobal } from "@/context/GlobalContext";
import "@/styles/Modal.css";
import { forwardRef, useEffect, useState } from "react";


const Modal = forwardRef(({ children, id }, ref) => {

    const { closeModal } = useForm();

    const { imgClass, mode } = useGlobal();

    const [show, setShow] = useState('');
    const [show2, setShow2] = useState('');
    useEffect(() => {
        setShow(mode === 'light' ? 'hidden' : '');
        setShow2(mode === 'dark' ? 'hidden' : '');
    }, [mode]);

    return (<div
        ref={ref}
        className="modal-login relative z-10 container mx-auto pb-4 hidden transition-all"
        id={id}
    >
        <div className="relative inline-block overflow-hidden" data-id={id}>
            <img src={srcLogo2.src} width={150} alt="Logo Kimik" className={`${show} mb-[-50px]`} />
            <img src={srcLogoWhite.src} width={150} alt="Logo Kimik" className={`${show2}`} />
        </div>
        <div className="flex justify-end">
            <button className="btnCloseModalRegister mr-2" onClick={closeModal}>
                <img className={`${imgClass}`} src={srcClose.src} width={45} alt="Close" />
            </button>
        </div>
        {children}
    </div>);
});
export default Modal;
