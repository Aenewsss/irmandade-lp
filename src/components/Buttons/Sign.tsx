import Link from "next/link";

const SignButton = ({ link }: any) => {
    return (
        <Link target="_blank" href={link} className="btn btn-red text-white scale fs-5 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5">
            <span>Assinar AGORA</span>
        </Link>
    );
}

export default SignButton;