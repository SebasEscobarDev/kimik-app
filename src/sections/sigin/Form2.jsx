import srcOne from "@/assets/images/Recurso 1.png";
import srcTwo from "@/assets/images/Recurso 2.png";
import srcThree from "@/assets/images/Recurso 3.png";
import srcSix from "@/assets/images/Recurso 6.png";
import srcImgForm2 from "@/assets/images/img-form2.jpg";

import PrimaryButton from "@/components/global/PrimaryButton";
import { cadena, CLASSES } from "@/consts";
import Modal from "@/components/register/Modal";
import CheckBoxPro from "@/components/register/CheckBoxPro";
import Tooltip from "@/components/register/Tooltip";
import { useForm } from "@/context/FormContext";
import { useState } from "react";
import { showAlert } from "@/utils/swalert";
import useSigin from "@/hooks/useSigin";
import { useGlobal } from "@/context/GlobalContext";


// <script>
//     
// </script>


const Form2 = () => {

    const { form, setForm } = useForm();

    const { refForm2, refForm3, refAlertForm } = useSigin();


    const [day, setDay] = useState(form.txtDia);
    const [month, setMonth] = useState(form.txtMes);
    const [year, setYear] = useState(form.txtAnio);

    const validateDate = (day, month, year) => {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 70;
        const maxYear = currentYear - 18;

        if (year < minYear || year > maxYear) {
            return false;
        }

        const date = new Date(year, month - 1, day);
        return date.getFullYear() === parseInt(year) &&
            date.getMonth() === parseInt(month) - 1 &&
            date.getDate() === parseInt(day);
    };

    const handleDayChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 31))) {
            setDay(value);
            setForm({ ...form, txtDia: value })
        }
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 12))) {
            setMonth(value);
            setForm({ ...form, txtMes: value })
        }
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setYear(value);
            const currentYear = new Date().getFullYear();
            const minYear = currentYear - 70;
            const maxYear = currentYear - 18;
            if (value !== '' && (parseInt(value) < minYear || parseInt(value) > maxYear)) {

            } else {
                setForm({ ...form, txtAnio: value })
            }
        }
    };




    const handleNext = () => {
        if (!validateDate(day, month, year)) {
            return showAlert('error', 'Error!', cadena.txtFormDos11[languageText])
        }
        //validar que los campos no esten vacios
        if (
            form.txtFullName == '' ||
            form.txtDia == '' ||
            form.txtMes == '' ||
            form.txtAnio == ''
        ) {
            return showAlert('error', 'Error!', cadena.txtFormDos12[languageText])
        }
        if (form.txtHoraNacimiento == '') {
            form.txtHoraNacimiento = '12:00:00'
        }
        //si todo es correcto, hacer lo siguiente:
        refForm2.current.classList.add("hidden")
        refForm3.current.classList.remove("hidden")
    }


    const { borderClass, languageText } = useGlobal();

    return (
        <Modal id="box-form-2" ref={refForm2}>
            <div className="relative inline-block overflow-hidden mb-2">
                <h3 className={`${CLASSES.h3} pb-2`}>{cadena.txtFormDos1[languageText]}</h3>
            </div>
            <div className="flex flex-col md:flex-row">
                <div
                    style={{ backgroundImage: `url(${srcImgForm2.src})`, backgroundPositionY: `center`, backgroundSize: `100%` }}
                    className={`flex md:hidden h-36 border-[1.5px] ${borderClass} bg-white py-4 px-4 rounded-t-[25px]`}
                >
                </div>
                <div
                    className={`flex w-[100%] md:w-[750px] border-[1.5px] ${borderClass} bg-white py-4 px-4 rounded-b-[25px] md:rounded-l-[25px] md:rounded-r-[0px]`}
                >
                    <div className="w-full">
                        <div className="flex flex-col text-center justify-center mb-3">
                            <div className="flex flex-col px-0 md:px-10 gap-2">
                                {/* <div ref={refAlertForm}></div> */}
                                <label htmlFor="txtFullName" className={`${CLASSES.label}`}>
                                    {cadena.txtFormDos2[languageText]}
                                </label>
                                <div className="flex mb-2">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[50px] md:h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcOne.src}
                                            width={40}
                                            alt="logo Nombre Completo"
                                        />
                                    </div>
                                    <input
                                        className={`${CLASSES.inputTwo}`}
                                        type="text"
                                        name="txtFullName"
                                        placeholder={cadena.txtFormDos3[languageText]}
                                        pattern="[a-zA-Z]+"
                                        minLength="5"
                                        maxLength="260"
                                        value={form.txtFullName}
                                        onChange={(e) => setForm({ ...form, txtFullName: e.target.value })}
                                        required
                                    />
                                </div>
                                <label htmlFor="txtDia" className={`${CLASSES.label}`}>
                                    {cadena.txtFormDos4[languageText]}
                                </label>
                                <div className="flex mb-2">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[50px] md:h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcTwo.src}
                                            width={40}
                                            alt="logo Cumpleanios"
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="special-select mr-2">
                                            <input
                                                className={`${CLASSES.inputTwo}`}
                                                type="text"
                                                name="txtDia"
                                                placeholder={cadena.txtFormDos5[languageText]}
                                                minLength="1"
                                                maxLength="2"
                                                min="1"
                                                max="31"
                                                value={day}
                                                onChange={handleDayChange}
                                                required
                                            />
                                        </div>
                                        <div className="special-select mr-2">
                                            <input
                                                className={`${CLASSES.inputTwo}`}
                                                type="text"
                                                name="txtMes"
                                                placeholder={cadena.txtFormDos6[languageText]}
                                                minLength="1"
                                                maxLength="2"
                                                min="1"
                                                max="12"
                                                value={month}
                                                onChange={handleMonthChange}
                                                required
                                            />
                                        </div>
                                        <div className="special-select">
                                            <input
                                                className={`${CLASSES.inputTwo}`}
                                                type="text"
                                                name="txtAnio"
                                                placeholder={cadena.txtFormDos7[languageText]}
                                                maxLength="4"
                                                value={year}
                                                onChange={handleYearChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="txtNacimientoCiudad" className={`${CLASSES.label}`}>
                                    {cadena.txtFormDos8[languageText]}
                                </label>
                                <div className="flex mb-2">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[50px] md:h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcSix.src}
                                            width={25}
                                            alt="logo Nombre Completo"
                                        />
                                    </div>
                                    <input
                                        className={`${CLASSES.inputTwo}`}
                                        type="text"
                                        name="txtNacimientoCiudad"
                                        placeholder={cadena.txtFormDos9[languageText]}
                                        pattern="[a-zA-Z]+"
                                        minLength="5"
                                        maxLength="260"
                                        value={form.txtNacimientoCiudad}
                                        onChange={(e) => setForm({ ...form, txtNacimientoCiudad: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex w-full text-center justify-center">
                                    <CheckBoxPro
                                        id="chkGender"
                                        text={cadena.txtFormDos10[languageText]}
                                        form={form}
                                        setForm={setForm}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${srcImgForm2.src})`, backgroundPositionY: `center`, backgroundSize: `100%` }}
                    className={`hidden md:flex md:w-[450px] md:w-order border-[1.5px] ${borderClass} bg-white py-4 px-4 md:rounded-r-[25px] md:rounded-l-[0px]`}
                >
                </div>
            </div>
            <div className="flex w-full justify-center mt-8">
                <PrimaryButton type="btnSecondary" id="btnNext2" onClick={handleNext}>
                    {cadena.txtBtnNext[languageText]}
                </PrimaryButton>
            </div>
        </Modal>
    )
}

export default Form2;