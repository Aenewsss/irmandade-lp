import Image from "next/image";
import ScheduleButton from "./Buttons/Schedule";

const Feedbacks = () => {
    return (
        <section className="mt-5 pt-5" id="differentials">
            <h2 className="section-heading display-2 fw-bold text-center w-100 mt-0 pt-0 container mt-5">O QUE ESTÃO DIZENDO DO CLUBE?</h2>

            <div className="col-md-12 d-flex flex-column align-items-center justify-content-between">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item p-md-5 active">
                            <div className="d-flex flex-column p-md-5 p-3 m-5 feedback-card">
                                <p className="fst-italic fs-5">Atendimento incrivel. Profissionais de qualidade que, com pouco tempo de atendimento, você já os tem como amigos pessoais. Para quem está procurando uma barbearia de qualidade, pode ir sem medo!!</p>
                                <h4 className="text-uppercase text-start">- Maxwell B</h4>
                            </div>
                        </div>
                        <div className="carousel-item p-md-5">
                            <div className="d-flex flex-column p-md-5 p-3 m-5 feedback-card">
                                <p className="fst-italic fs-5">Atendimento diferenciado, corte muito bom, profissionais qualificados. Sempre corto cabelo nesse lugar, melhor agendar antes. Preço bom! Tem fliperama e cerveja gelada!</p>
                                <h4 className="text-uppercase text-start">- Ladislau B</h4>
                            </div>
                        </div>
                        <div className="carousel-item p-md-5">
                            <div className="d-flex flex-column p-md-5 p-3 m-5 feedback-card">
                                <p className="fst-italic fs-5">O barbeiro é muito educado, atencioso e sabe o que está fazendo. A experiência foi tão boa que aderi ao plano anual do clube</p>
                                <h4 className="text-uppercase text-start">- Brunno P</h4>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <ScheduleButton />
            </div>
        </section>
    );
}

export default Feedbacks;