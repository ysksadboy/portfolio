'use client';
import { Navbar } from 'flowbite-react';
import { BsEmojiFrownFill } from "react-icons/bs";
export default function NavbarWithCTAButton() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://www.linkedin.com/in/andrew-wilkinson-9450b9277/" target="_blank">
                <img

                    alt=""
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                />
                <BsEmojiFrownFill />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Andrew Wilkinson
                </span>
                <span>/Portfolio</span>
            </Navbar.Brand>
            <Navbar.Collapse className='border-radius-50px'>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="https://luxury-narwhal-d3cfc5.netlify.app/" target="_blank">
                    Blog: Last 65 Days.
                </Navbar.Link>
                <Navbar.Link href="https://www.instagram.com/ysksadboy/" target='_blank'>
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>

    )
}