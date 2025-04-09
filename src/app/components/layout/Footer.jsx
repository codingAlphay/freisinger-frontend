"use client"
import Image from "next/image"
import Link from "next/link"
import { wohndesignItems } from "src/app/page"

const Footer = () => {
    return (
        <footer className="p-10 pt-32 bg-darkbg">
            <div className='max-w-6xl px-6 mx-auto'>
            <footer className="grid items-center w-full grid-cols-1 md:grid-cols-2 footer md:flex-row md:gap-x-32 text-neutral-content">
            <div className='flex flex-col items-center w-full'>
                <div className='flex flex-col space-y-1 text-center md:text-left'>
                <Image alt={"Logo"} src={"/images/metallbau-freisinger-logo.png"} className='mx-auto mb-4 md:mx-[unset]' width={210} height={65}/>
                <p className="font-bold text-white">© { new Date().getFullYear()} Metallbau Freisinger KG <br />Stahlbau Edelstahlbearbeitung</p>
                <p className="text-gray-300">Sebi 4</p>
                <p className="text-gray-300">6342 Niederndorf bei Kufstein</p>
                <div className='flex flex-col pt-2 text-gray-300'>
                    <a href={"tel:+43537343298"} className="duration-300 hover:text-primary">+43 (0) 5373 43298</a>
                    <a href={"mailto:office@freisinger-niro.at"} className="duration-300 hover:text-primary">office@freisinger-niro.at</a>
                </div>
                {/* <Link href={"/impressum"} className={"duration-300 hover:translate-x-2 hover:text-primary font-semibold pt-3 text-gray-200"}>Impressum</Link>
                <Link href={"/datenschutz"} className={"duration-300 hover:translate-x-2 hover:text-primary font-semibold text-gray-200"}>Datenschutz</Link> */}
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <div className='flex flex-col space-y-1.5 text-center text-gray-300 md:text-left'>
                <span className="text-lg font-extrabold text-white">Impressum</span>
                <span className="text-lg font-extrabold text-white">Datenschutz</span>
                <span className="text-lg font-extrabold text-white">Metallbau Freisinger</span>
                <span className="text-lg font-extrabold text-white">Aktuelles</span>
                <span className="text-lg font-extrabold text-white">Galerie</span>
                <span className="text-lg font-extrabold text-white">Leistungen </span>
                <div className="grid grid-cols-2">
                    {wohndesignItems.slice(0, Math.floor(wohndesignItems.length / 4)).map((item, index) => (
                        <Link href={'/leistungen/'} key={index} className='duration-300 hover:translate-x-2 hover:text-primary'>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"w-1/3"}></div>
            </footer>
        </div>
        </footer>
    )
}

export default Footer
 