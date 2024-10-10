import { createContext, useContext, useState } from "react"


export const CoupleContext = createContext();

export const CoupleProvider = ({ children }) => {

    const initialState = {
        txtFullName: "",
        txtDia: "",
        txtMes: "",
        txtAnio: "",
        slcIdentify: "",
        txtFoto: "",
        acerca: "",
        user_id: "",
    }

    const [form, setForm] = useState(initialState)
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    return (
        <CoupleContext.Provider
            value={{
                form,
                setForm,
                file,
                setFile,
                previewUrl,
                setPreviewUrl
            }}
        >
            {children}
        </CoupleContext.Provider>
    )
}

export const useCouple = () => useContext(CoupleContext);
