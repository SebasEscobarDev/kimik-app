import { postCoupleFormData } from "@/api/couple";
import srcLogo2 from "@/assets/images/logo.webp";
import srcSeven from "@/assets/images/Recurso 7.png";
import srcEigth from "@/assets/images/Recurso 8.png";
import srcUpload from "@/assets/svgs/upload.svg";
import SelectPro from "@/components/register/SelectPro";
import { cadena, CLASSES } from "@/consts";
import { useCouple } from "@/context/CoupleContext";
import { useGlobal } from "@/context/GlobalContext";
import { getCookie } from "@/utils/cookies";
import { showAlert } from "@/utils/swalert";
import { useRef, useState } from "react";



const Form1 = () => {
    const { form, setForm, file, setFile, previewUrl, setPreviewUrl } = useCouple();

    const { languageText } = useGlobal();

    const refInputFoto = useRef(null);
    const handleBtnFoto = () => {
        refInputFoto.current.click();
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            const previewUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(previewUrl);
        } else {
            alert('Please select a valid image file');
            setFile(null);
            setPreviewUrl(null);
        }
    };

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

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
                //notificar que el anio debe ser mayor
                setForm({ ...form, txtAnio: '' })
            } else {
                setForm({ ...form, txtAnio: value })
            }
        }
    };

    const handleEnd = async () => {

        console.log('form :')
        console.log(form)

        if (!file) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);



        //validar campos vacios
        if (!form.txtFullName || !form.txtDia || !form.txtMes || !form.txtAnio || !form.slcIdentify || !previewUrl) {
            return showAlert('error', 'Error!', cadena.txtFormDos12[languageText]);
        }
        //si todo es correcto, guardo la informacion del usuario y paso a la pagina de bienvenida

        const cookieUser = JSON.parse(getCookie("User"));
        let response;

        const couple = {
            nombre: form.txtFullName,
            nacimiento_dia: form.txtDia,
            nacimiento_mes: form.txtMes,
            nacimiento_ano: form.txtAnio,
            genero_identifica: form.slcIdentify,
            foto: previewUrl,
            acerca: '',
            user_id: cookieUser.id,
        };

        console.log(couple)

        formData.append('id', couple.id);
        formData.append('nombre', couple.nombre);
        formData.append('nacimiento_dia', couple.nacimiento_dia);
        formData.append('nacimiento_mes', couple.nacimiento_mes);
        formData.append('nacimiento_ano', couple.nacimiento_ano);
        formData.append('genero_identifica', couple.genero_identifica);
        formData.append('foto', '');
        formData.append('acerca', couple.acerca);
        formData.append('user_id', couple.user_id);

        response = await postCoupleFormData(formData);
        console.log(response)

        if (response.status >= 200 && response.status <= 400) {
            showAlert('success', 'Exito!', cadena.txtCouples1[languageText]);
            // window.location.href = "/pareja/registro";
        } else {
            console.log(response)
            showAlert('error', 'Error!', cadena.txtFormSiete1[languageText])
        }



    }

    return (
        <div className="flex flex-col">
            <h2 className="pt-4 md:pt-0 pl-4 md:pl-0 text-left mb-4 text-xl pop-regular">{cadena.txtCouples2[languageText]}</h2>
            <div className="w-full md:w-[500px] bg-[#D84066] md:rounded-[25px] p-3 md:border border-white">
                {/* <div className="flex pt-2 pb-4 border-b border-white">
                    <div className="w-[55px] h-[55px] min-w-[55px] border border-black bg-black p-1 rounded-full ml-2 mr-4">
                        <img src={srcLogo2.src} alt="Logo" />
                    </div>
                    <div className="flex flex-col text-left w-full">
                        <h3 className="text-white text-xl pop-regular">Nombre</h3>
                        <small className="text-sm text-white">Ubicacion</small>
                    </div>
                </div> */}
                <div className="my-4 flex flex-col gap-2">
                    <label htmlFor="txtFullName" className={`${CLASSES.label}`}>
                        {cadena.txtFormDos2[languageText]}
                    </label>
                    <div className="flex mb-2">
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
                    <label htmlFor="slcIdentify" className={`${CLASSES.label}`}>
                        {cadena.txtGenero[languageText]}
                    </label>
                    <div className="flex mb-2 z-40">
                        <SelectPro
                            id="slcIdentify"
                            options={cadena.optionsGender[languageText]}
                            form={form}
                            setForm={setForm}
                        />
                    </div>
                    <label className={`${CLASSES.label}`}>
                        {cadena.txtFormCuatro1[languageText]}
                    </label>
                    <div className="hidden md:flex flex-col md:flex-row">
                        <button
                            onClick={handleBtnFoto}
                            title="Subir Foto"
                            type="button"
                            className="flex bg-white w-full cursor-pointer md:w-2/4 border align-center items-center justify-center border-black rounded-[25px] md:mr-2 mb-4 md:mb-0"
                        >
                            <div className="relative p-4">

                                <img
                                    className="relative"
                                    id="imgFotoOjos"
                                    src={previewUrl ?? srcSeven.src}
                                    width={245}
                                    height={143}
                                    alt="Subir imagen"
                                />
                            </div>
                        </button>
                        <input
                            ref={refInputFoto}
                            className="hidden"
                            type="file"
                            name="inputFoto"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div
                            className="flex bg-white w-full md:w-2/4 flex-col justify-center border border-black rounded-[25px] md:ml-2"
                        >
                            <div
                                className="flex justify-center items-center h-[160px] overflow-hidden mb-2"
                            >
                                <img
                                    className="w-[200px]"
                                    src={srcEigth.src}
                                    alt="Demostracion de foto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <button
                            onClick={handleBtnFoto}
                            className={`bg-white border border-black w-full justify-between rounded-xl flex items-center px-4 h-[58px] mr-2`}
                        >
                            <label className="w-full text-black pop-bold">{previewUrl ? 'Cambiar' : 'Cargar'} Foto</label>
                            <img src={srcUpload.src} className="mr-2" width={30} alt="Upload" />

                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            className={`bg-transparent cursor-pointer border border-black w-[160px] justify-center rounded-[25px] flex items-center px-4 py-2 mr-2`}
                        >
                            <label className=" text-black pop-bold cursor-pointer"> {cadena.txtBtnCancel[languageText]}</label>

                        </button>

                        <button
                            onClick={handleEnd}
                            className={`ml-4 bg-black cursor-pointer border border-black w-[160px] justify-center rounded-[25px] flex items-center px-4 py-2 mr-2`}
                        >
                            <label className="text-white pop-bold cursor-pointer"> {cadena.txtBtnAccept[languageText]}</label>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1;