
import srcSquare from "@/assets/images/square.webp";
import { CLASSES } from "@/consts.ts";
import { useGlobal } from "@/context/GlobalContext";

import "@/styles/PrimaryButton.css";
import { forwardRef } from "react";


const PrimaryButton = forwardRef(({ children, id, onClick, type, spin, direction }, ref) => {

	const { borderClass, textClass, textClass2, mode } = useGlobal();

	const returnHTML = () => {
		if (spin) {
			return (
				<button ref={ref} type="button" id={id} onClick={onClick} className={CLASSES.btnSpin} >
					<img
						src={srcSquare.src}
						width={40}
						alt="square"
						className={`spin-${direction} w-[30px] md:w-[40px] py-[4px] mr-5 md:py-[6px] md:mr-10`}
					/>
					<span className={`${CLASSES[type]}`}>
						{children}
					</span>
				</button >
			)
		} else {
			return (
				<button ref={ref} type="button" id={id} onClick={onClick} className={`${CLASSES[type]} ${type != 'btnSecondary' ? `border ${borderClass}` : ''} ${mode === 'dark' && type == 'btnSecondary' ? `${textClass2}` : `${textClass}`}`}>
					{children}
				</button>
			)
		}
	}

	return returnHTML();
});

export default PrimaryButton;
