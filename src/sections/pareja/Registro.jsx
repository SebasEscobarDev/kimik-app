import bgFondo from "@/assets/images/fondo.webp";
import bgWhite from "@/assets/images/bg-white.webp";
import srcLogo2 from "@/assets/images/logo.webp";
import HeaderPrincipal from "@/components/menu/HeaderPrincipal";
import CardPerfilHorizontal from "@/components/global/CardPerfilHorizontal";
import { getCookie } from "@/utils/cookies";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import Form1 from "./Form1";
import { getCoupleUser } from "@/api/couple";

const Registro = () => {
    const { refHeaderButtonsNull } = useGlobal();

    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
        } else {
            window.location.href = "/";
        }
    }, []);

    const { mode } = useGlobal();
    const [srcImg, setSrcImg] = useState(bgFondo.src);
    useEffect(() => {
        setSrcImg(mode === 'dark' ? bgFondo.src : bgWhite.src);
    }, [mode]);


    const { userLogin } = useGlobal();
    const [pareja, setPareja] = useState(false)


    useEffect(() => {
        //saber si el usuario ya ha registrado una pareja
        //getPareja(user_id)
        (async () => {
            if (userLogin.id === undefined) return
            const response = await getCoupleUser(userLogin.id)
            if (response.data && response.data[0]?.id) {
                setPareja(true)
            }
        })()
    }, []);

    return (
        <div
            style={{ backgroundColor: 'white', backgroundImage: `url(${srcImg})` }}
            className="flex flex-col w-full min-h-screen md:p-10 text-center bg-contain"
        >
            <HeaderPrincipal id="headerButtonsBlob" back={false} refBtn={refHeaderButtonsNull} />
            <div className="w-full flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[500px] flex flex-col z-10 pt-[1px]">
                    <CardPerfilHorizontal
                        btnChat={false}
                        btnNotify={false}
                        maxw={false}
                    />
                </div>
                <div className="w-full hidden md:flex z-10 gap-4 px-4 md:px-40 pl-2 flex-col">
                    <div
                        className="w-full flex items-center justify-center mb-[-5px] mt-[-103px]"
                    >
                        <div className="relative inline-block overflow-hidden">
                            <img
                                src={srcLogo2.src}
                                width={150}
                                alt="Logo Kimik"
                                className="mb-[-50px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col xl:flex-row w-full justify-center gap-10 lg:px-[10%]">
                    {!pareja && <Form1 />}
                    {pareja && <h1 className="text-2xl text-white pop-semi">Ya tienes una pareja registrada!</h1>}
                </div>
            </div>
        </div>
    );
};

export default Registro;