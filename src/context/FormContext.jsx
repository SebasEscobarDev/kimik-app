import { getGenres } from "@/api/genres";
import { createContext, useContext, useEffect, useRef, useState } from "react"


export const FormContext = createContext();

export const FormProvider = ({ children }) => {


    const refBtnCloseModalRegister = useRef(null),
        refModalLogin = useRef(null),
        refBtnSigin = useRef(null),
        refH3Title = useRef(null),
        refForgiven = useRef(null),
        refDivRegister = useRef(null),
        refDivForgiven = useRef(null),
        refTxtEmailForgiven = useRef(null),
        //campos formulario
        refTxtUser = useRef(null),
        refTxtPassword = useRef(null),
        refTxtPassConfirm = useRef(null),
        // campo respuesta formulario
        refAlertForm = useRef(null),
        refDescriptionForm = useRef(null),
        //formularios
        refForm1 = useRef(null),
        refForm2 = useRef(null),
        refForm3 = useRef(null),
        refForm4 = useRef(null),
        refForm6 = useRef(null),
        refForm7 = useRef(null);

    function getRandomTime() {
        // Generar una hora aleatoria entre 0 y 23
        const hours = Math.floor(Math.random() * 24);

        // Generar minutos aleatorios entre 0 y 59
        const minutes = Math.floor(Math.random() * 60);

        // Generar segundos aleatorios entre 0 y 59
        const seconds = Math.floor(Math.random() * 60);

        // Formatear los números para que siempre tengan dos dígitos
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Combinar los componentes en el formato HH:MM:SS
        const randomTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        return randomTime;
    }

    //random time 12:00:00
    const horaNacido = getRandomTime();

    const initialState = {
        txtUser: "sebas@gmail.com",
        txtPassword: "Qaws12pj-22",
        txtPassConfirm: "Qaws12pj-22",
        txtForgiven: "",
        txtFullName: "Sebastian Gonzalez Escobar",
        txtDia: "04",
        txtMes: "02",
        txtAnio: "1997",
        txtHoraNacimiento: horaNacido,
        txtNacimientoCiudad: "Manizales",
        chkGender: true,
        slcIdentify: "",
        slcInterest: "",
        edadMin: "",
        edadMax: "",
        txtFoto: "",
        txtApp: "",
        chkPersonalData: true,
        chkTerms: true
    }

    const [form, setForm] = useState(initialState)

    const [file, setFile] = useState(null);

    const [previewUrl, setPreviewUrl] = useState(null);


    function clear_form_close() {
        refAlertForm.current.innerHTML = "";
        setForm(initialState)
    }

    function closeModal() {

        clear_form_close()
        if (refDivRegister.current.classList.contains("hidden")) {
            refDivRegister.current.classList.remove("hidden")
            refDivForgiven.current.classList.add("hidden")
        }
        refModalLogin.current.classList.add("oculto");
        refForm1.current.classList.add("hidden");
        refForm2.current.classList.add("hidden");
        refForm3.current.classList.add("hidden");
        refForm4.current.classList.add("hidden");
        refForm6.current.classList.add("hidden");
        refForm7.current.classList.add("hidden");
    }

    const [optionsGender, setOptionsGender] = useState({})

    useEffect(() => {
        (async () => {
            const allGenres = await getGenres()
            if (allGenres?.data?.rows) {

                const options = {
                    es: [],
                    en: [],
                    pt: []
                };

                allGenres.data.rows.forEach(genero => {
                    options.es.push(genero.genero_es);
                    options.en.push(genero.genero_en);
                    options.pt.push(genero.genero_pt);
                });

                await setOptionsGender(options)
                console.log(optionsGender["es"])
            }
        })()
    }, []);


    return (
        <FormContext.Provider
            value={{
                form,
                setForm,
                file,
                setFile,
                previewUrl,
                setPreviewUrl,
                refModalLogin,
                refBtnSigin,
                refH3Title,
                refForgiven,
                refDivRegister,
                refDivForgiven,
                refTxtEmailForgiven,
                refTxtUser,
                refTxtPassword,
                refTxtPassConfirm,
                refAlertForm,
                refDescriptionForm,
                refForm1,
                refForm2,
                refForm3,
                refForm4,
                refForm6,
                refForm7,
                optionsGender,
                closeModal
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext);
