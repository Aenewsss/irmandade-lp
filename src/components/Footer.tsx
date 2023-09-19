import { environments } from "@components/environments";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-100 mt-5 pt-5">
            <div className="bg-black p-4">
                <div className="row d-flex justify-content-center gap-md-0 gap-3">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Image loading="lazy" width={140} height={42} src="/favicon.png" alt="transparente.svg" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <h6 className="text-main fw-bold mb-0 d-md-flex d-none">IRMANDADE FÉPAS</h6>
                        <Link target="_blank" href={environments.mapsLink} className="d-flex align-items-center gap-2 mt-3">
                            <Image loading="lazy" width={20} height={20} src="/icons/house.svg" alt="transparente.svg" />
                            <div className="text-white">
                                <p className="mb-0 fs-10">
                                    Avenida San Diego, 96 - Loja 10
                                </p>
                                <p className="fs-10 mb-0">
                                    Jardim Botânico - Brasília DF
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex d-flex align-items-center justify-content-center">
                        <div className="text-white ">
                            <h6 className="text-main fw-bold mb-0">REDES SOCIAIS</h6>
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Link target="_blank" href={environments.whatsAppLink} className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/whatsapp.svg" alt="transparente.svg" />
                                    <span>(61) 99185-5178</span>
                                </Link>
                                <Link target="_blank" href={environments.instagramLink} className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/instagram.svg" alt="transparente.svg" />
                                    <span>irmandadefepas</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3">
                <Link className="text-dark" href="https://aenamartinelli.com.br">
                    <p className="text-center mb-0 fs-10 ">
                        Copyright © 2023 All rights reserved | Site desenvolvido por
                        &nbsp;
                        <span className="text-main">
                            aenamartinelli.com.br
                        </span>
                    </p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;