import Image from "next/image";
import SignButton from "./Buttons/Sign";
import { environments } from "@components/environments";
import Link from "next/link";

const Plans = () => {
    return (
        <section className="mt-5 pt-5" id="plans">
            <h2 className="section-heading display-2 fw-bold text-center w-100 mt-0 pt-5 mt-5">ESCOLHA O PLANO QUE MELHOR SE<br />ENCAIXA COM O SEU PERFIL</h2>

            <div className="container d-flex gap-5 mt-5 flex-wrap justify-content-center">
                <Link href={environments.linkPremium} className="scale rounded bg-white p-3 ">
                    <Image quality={100} className="rounded" width={250} height={300}  src="/images/plano-premium.png" alt="Plano Premium"/>
                    <div className="w-100 border border-secondary mb-3"></div>
                    <SignButton link={environments.linkPremium}/>
                </Link>
                <Link href={environments.linkVip} className="scale rounded bg-white p-3 ">
                    <Image quality={100} className="rounded" width={250} height={300}  src="/images/plano-vip.png" alt="Plano Premium"/>
                    <div className="w-100 border border-secondary mb-3"></div>
                    <SignButton link={environments.linkVip}/>
                </Link>
                <Link href={environments.linkAlfa} className="scale rounded bg-white p-3 ">
                    <Image quality={100} className="rounded" width={250} height={300}  src="/images/plano-alfa.png" alt="Plano Premium"/>
                    <div className="w-100 border border-secondary mb-3"></div>
                    <SignButton link={environments.linkAlfa}/>
                </Link>
                <Link href={environments.linkAssociado} className="scale rounded bg-white p-3 ">
                    <Image quality={100} className="rounded" width={250} height={300}  src="/images/plano-associado.png" alt="Plano Premium"/>
                    <div className="w-100 border border-secondary mb-3"></div>
                    <SignButton link={environments.linkAssociado}/>
                </Link>
            </div>
        </section>
    );
}

export default Plans;