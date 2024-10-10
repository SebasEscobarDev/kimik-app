import srcAsistente from '@/assets/images/asistente.png';

const IconKimik = () => {

    const handleClick = () => {
        console.log('Hala');
    }

    return (
        <div className={`flex justify-end w-full`} onClick={handleClick}>
            <button><img src={srcAsistente.src} alt="" /></button>
        </div>
    );
};

export default IconKimik;