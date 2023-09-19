'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScheduleButton from "./Buttons/Schedule";
import { environments } from "@components/environments";

const Navbar = () => {

    const [backgroundColor, setBackgroundColor] = useState('transparent');

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setBackgroundColor('black')
            } else {
                setBackgroundColor('transparent')
            }
        })
    }

    return (
        <nav id="sidebar" style={{ backgroundColor }} className="pt-2 z-2 navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container d-flex justify-content-md-between justify-content-center w-100 pb-3 pt-1 gap-1">

                <Link className="navbar-brand navbar-brand m-0 d-md-flex d-none" href="/#">
                    <Image loading="lazy" fill id="img-navbar" className="img-fluid" style={{ maxHeight: '90px', maxWidth: '100px' }} src="/favicon.png" alt="logo.svg" />
                </Link>

                <div className="collapse navbar-collapse mt-md-0 " id="navbarNav">
                    <ul className="flex-wrap navbar-nav d-flex flex-row align-items-center justify-content-end gap-5 w-100">
                        <li className="nav-item">
                            <ScheduleButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;