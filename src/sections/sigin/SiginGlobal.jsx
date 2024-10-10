// Desc: Chat window with global context
import { GlobalProvider } from "@/context/GlobalContext"
import SiginWindow from "./SiginWindow";
import ModalSettings from "@/components/global/ModalSettings";
import Splash from "./Splash";
import { FormProvider } from "@/context/FormContext";

const SiginGlobal = () => {
	return (
		<GlobalProvider>
			<Splash />
			<ModalSettings home={true} />
			<FormProvider>
				<SiginWindow />
			</FormProvider>
		</GlobalProvider>
	)
};

export default SiginGlobal;
