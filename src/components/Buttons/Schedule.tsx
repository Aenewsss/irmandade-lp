import { environments } from "@components/environments";
import Link from "next/link";

const ScheduleButton = () => {
    return (
        <Link target="_blank" href={environments.clubLink} className="btn btn-main text-white scale fs-5 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5">
            <span>QUERO FAZER PARTE DO CLUBE!</span>
        </Link>
    );
}

export default ScheduleButton;