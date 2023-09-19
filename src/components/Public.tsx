import ScheduleButton from "./Buttons/Schedule";

const Public = () => {
    return (
        <section className="mt-5 pt-5" id="differentials">
            <h2 className="section-heading display-2 fw-bold text-center w-100 mt-0 pt-5 mt-5">PARA QUEM É O CLUBE IRMANDADE?</h2>

            <div className="public-irmandade d-flex justify-content-center align-items-center position-relative">
                <h3 className="text-center fs-1">
                    O clube Irmandade Fépas foi criado para homens de<br />
                    <span className="text-main">&nbsp;bom gosto</span>
                    , que prezam por
                    <span className="text-main">&nbsp;estilo, elegância, bom<br /> atendimento e preço justo.</span>
                </h3>
                <div className="position-absolute button-public">
                    <ScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default Public;