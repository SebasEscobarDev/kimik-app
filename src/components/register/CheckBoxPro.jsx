import { CLASSES } from "@/consts";
import srcCheck from "@/assets/svgs/check.svg";
import { useRef, useState } from "react";


const CheckBoxPro = ({ id, text, form, setForm }) => {

    const [isVisble, setIsVisible] = useState(false);
    const inputRef = useRef(null);

    const handleClick = async () => {
        console.log('handleClick CheckboxPro')
        setIsVisible(!isVisble);
        inputRef.current.checked = await !inputRef.current.checked;
        await setForm((prevForm) => ({ ...prevForm, [id]: inputRef.current.checked }));
    }

    return (
        <div>
            <label htmlFor={id} className={`${CLASSES.secondaryLabel}`}>
                <span>
                    <button
                        onClick={handleClick}
                        type="button"
                        aria-label={id}
                        value={text}
                        className={`${CLASSES.bgPrimary} mr-2 m-[-2px] p-[2px] rounded`}
                    >
                        <img
                            src={srcCheck.src}
                            className={`${isVisble ? '' : 'invisible'}`}
                            alt="checked"
                            width={15}
                        />
                    </button>
                    {text}
                </span>
                <input
                    ref={inputRef}
                    type="checkbox"
                    name={id}
                    id={id}
                    value={text}
                    className="invisible"
                />
            </label>
        </div>
    );
};

export default CheckBoxPro;