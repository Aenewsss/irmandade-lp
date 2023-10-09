import Image from "next/image";
import ScheduleButton from "./Buttons/Schedule";
import InfiniteName from "./InfiniteName";

const HomeTop = () => {
    return (
        <section className="home-top pt-5 position-relative">
            <div className=" pt-5 d-flex flex-column align-items-center h-100 justify-content-center pb-5">
                <h1 className="display-1 text-white fw-bold text-center">
                    FAÇA PARTE DO MAIOR
                    <p className="bg-main mb-0 p-2">CLUBE DE ASSINATURA DE BRASÍLIA</p>
                </h1>

                <h2 className="mt-5 text-center mb-5">
                    Corte o Cabelo
                    <span className="text-main">&nbsp;TODA SEMANA&nbsp;</span>
                    por menos de<br/>R$3,30 POR DIA!!!
                </h2>

                <ScheduleButton />

                <div className="pt-5 pb-5"></div>

                <Image className="img-top position-absolute z-1" fill src="/favicon.png" alt="Logo Irmandade Fépas"/>
            </div>
            <InfiniteName />
        </section>
    );
}

export default HomeTop;
