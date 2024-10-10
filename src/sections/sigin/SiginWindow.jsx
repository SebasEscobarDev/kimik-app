import "../../styles/sigin.css";

import srcLogo from "@/assets/images/logo2.webp";
import srcLogo2 from "@/assets/images/logo.webp";
import srcFacebook from "@/assets/svgs/facebook.svg";
import srcInstagram from "@/assets/svgs/instagram.svg";
import srcSettings from "@/assets/images/settings.png";


import PrimaryButton from "@/components/global/PrimaryButton";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form6 from "./Form6";
import Form7 from "./Form7";

import { CLASSES, cadena } from "@/consts";
import { useForm } from "@/context/FormContext";
import useSigin from "@/hooks/useSigin";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useRef } from "react";
import { getCookie } from "@/utils/cookies";
import MenuWeb from "@/components/menu/MenuWeb";

const SiginWindow = () => {

	const { bgScreen, bgScreenMobile, handleModalLoginReact, handleModalSiginReact } = useSigin();
	const { setShowModalSettings, showModalSettings, showModalSigin, bgClass, languageText } = useGlobal();

	const { refModalLogin, closeModal } = useForm();


	function handleKeyDown(event) {
		if (event.key === 'Escape' || event.keyCode === 27) {
			if (!refModalLogin.current.classList.contains("oculto")) closeModal()
		}
	}

	function isNativePlatform() {
		return window.Capacitor && !isMobileWeb();
	}

	function isMobileWeb() {
		return /^https?:\/\//i.test(window.location.origin) && !window.Capacitor.isNative;
	}

	useEffect(() => {
		const auth = getCookie("AuthToken");
		const user = getCookie("User");
		if (auth != undefined && user != undefined) {
			const usserLogged = JSON.parse(getCookie("User"));
			if (usserLogged?.id != null && usserLogged?.id != undefined) {
				if (usserLogged.nombre === null || usserLogged.nombre === undefined) {
				} else {
					window.location.href = "/citas/blop";
				}
			}
		}

		if (isNativePlatform()) {
			const downloadIos = document.getElementById('downloadIos');
			downloadIos.classList.add('hidden');
			const downloadAndroid = document.getElementById('downloadAndroid');
			downloadAndroid.classList.add('hidden');
		}

	}, []);

	useEffect(() => {
		if (window.location.href.includes('iniciar-sesion')) {
			handleModalLoginReact();
		}
		if (window.location.href.includes('registro')) {
			handleModalSiginReact();
		}
	}, []);

	return (
		<div onKeyDown={handleKeyDown} className="relative z-10">
			{/* <!-- Vista PC --> */}
			<div
				id="bg-fullpc"
				style={{ backgroundImage: `url(${bgScreen.src})` }}
				className="hidden w-full min-h-screen bg-cover md:flex justify-center"
			>
				<div className="flex w-full justify-between">
					<div className="flex flex-col justify-between w-full min-h-screen p-10">
						<div className="flex">
							<div className="w-full">
								<img src={srcLogo.src} width={350} alt="Logo Kimik" />
							</div>
							<MenuWeb />
							<div className="w-full align-center">
								<div className="flex justify-end">
									<div className="mr-2">
										<PrimaryButton
											id="btnModalSettings"
											type="btnPrimaryThree"
											onClick={() => setShowModalSettings(!showModalSettings)}
										>
											{cadena.txtBtnSettings[languageText]}
										</PrimaryButton>
									</div>
								</div>
							</div>
						</div>

						<div className="flex">
							<div className="w-full">
								<h1
									className={`${CLASSES.textPrimary} md:text-8xl 2xl:text-9xl md:leading-[90px] 2xl:leading-[120px] pop-bold 2xl:pr-10`}
								>
									{cadena.txtSigin1[languageText]}
								</h1>
								<h2 className="text-white pl-[90px] text-[25px] hidden">
									{cadena.txtSigin2[languageText]}
								</h2>
							</div>
							<div className="w-full"></div>
						</div>

						<div className="flex">
							<div className="flex">
								<div className="flex">
									<PrimaryButton
										id="btnModalSigin"
										type="btnPrimary"
										spin="true"
										direction="rigth"
										onClick={handleModalSiginReact}
									>
										{cadena.txtBtn1[languageText]}
									</PrimaryButton>
								</div>
							</div>
							<div className="w-full flex justify-center m-auto align-center">
								<div className="w-full px-4 items-center flex justify-center">
									<h4 className="text-white">{cadena.txtCopyrigth[languageText]} 2024</h4>
									<a href="/" target="_blank" className="ml-2">
										<img
											src={srcInstagram.src}
											width={20}
											alt="Instagram"
										/>
									</a>
									<a href="/" target="_blank" className="ml-2">
										<img
											src={srcFacebook.src}
											width={20}
											alt="Facebook"
										/>
									</a>
								</div>
								<div className="flex flex-end justify-end">
									<PrimaryButton
										id="btnModalLogin"
										type="btnPrimaryTwo"
										spin="true"
										direction="left"
										onClick={handleModalLoginReact}
									>
										{cadena.txtBtn2[languageText]}
									</PrimaryButton>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Vista PC --> */}
			</div>

			{/* <!-- Vista Mobile --> */}
			<div
				id="bg-mobile"
				style={{ backgroundImage: `url(${bgScreenMobile.src})` }}
				className="w-full min-h-screen bg-cover inline-block md:hidden"
			>
				<div className="flex min-h-screen py-16 flex-col justify-between px-10">
					<div className="flex w-full justify-between">
						<img
							src={srcLogo.src}
							width={200}
							alt="Logo Mobile"
						/>
						<button id="btnModalSettings" type="button" className="flex relative flex-row-reverse w-[47px] align-right mt-3" onClick={() => setShowModalSettings(!showModalSettings)}>
							<img
								src={srcSettings.src}
								width={45}
								alt="Configuraciones"
							/>
						</button>
					</div>
					<div className="flex w-full">
						<div className="w-full"></div>
						<div className="w-full max-w-[380px]">
							<h1
								className={`${CLASSES.textPrimary} text-7xl leading-[65px] pop-bold`}
							>
								{cadena.txtSigin1[languageText]}
							</h1>
							<h2 className="pop-light text-white text-[18px] hidden">
								{cadena.txtSigin2[languageText]}
							</h2>
						</div>
						<div className="w-full"></div>
					</div>
					<div className="w-full">
						<div className="flex justify-center mb-6">
							<PrimaryButton
								id="btnModalSigin2"
								type="btnPrimary"
								spin="true"
								direction="left"
								onClick={handleModalSiginReact}
							>
								{cadena.txtBtn1[languageText]}
							</PrimaryButton>
						</div>
						<div className="flex justify-center">
							<PrimaryButton
								id="btnModalLogin2"
								type="btnPrimaryTwo"
								spin="true"
								direction="rigth"
								onClick={handleModalLoginReact}
							>
								{cadena.txtBtn2[languageText]}
							</PrimaryButton>
						</div>
					</div>
					<MenuWeb />
				</div>
			</div>
			{/* <!-- /Vista Mobile --> */}

			{/* <!-- Modal Sigin --> */}
			<div
				ref={refModalLogin}
				id="modalLogin"
				className={`${showModalSigin ? 'flex' : 'oculto'} ${bgClass} z-10 w-full overflow-y-scroll md:overflow-y-hidden fixed top-0 left-0 right-0 px-5 items-center justify-center text-center`}
			>
				<div className="flex">
					<Form1 />
					<Form2 />
					<Form3 />
					<Form4 />
					<Form6 />
					<Form7 />
				</div>
			</div>
		</div>
	);
};

export default SiginWindow;
