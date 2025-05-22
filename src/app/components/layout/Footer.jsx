"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";

const Footer = ({data}) => {
  const [isLeistungenOpen, setLeistungenOpen] = useState(false);

  const serviceItems = data.map(service => ({
    id: service.id,
    title: service.displayName,
    image: service.mainImage.url,
  }))

  return (
    <footer className="p-10 pt-32 bg-darkbg">
      <div className='max-w-6xl px-6 mx-auto'>
        <div className="grid items-end w-full grid-cols-1 md:grid-cols-3 footer md:flex-row md:gap-x-32 text-neutral-content text-sm rounded-md">
          <div className='flex flex-col w-full'>
            <div className='flex flex-col space-y-1 text-center md:text-left'>
              <Image alt={"Logo"} src={"/images/metallbau-freisinger-logo.png"} className='mx-auto mb-4 md:mx-[unset]' width={210} height={65}/>
              <p className="font-bold text-white">© { new Date().getFullYear()} Metallbau Freisinger KG <br />Stahlbau Edelstahlbearbeitung</p>
              <p className="text-gray-300">Sebi 4</p>
              <p className="text-gray-300">6342 Niederndorf bei Kufstein</p>
              <div className='flex flex-col pt-2 text-gray-300'>
                <a href={"tel:+43537343298"} className="duration-300 hover:text-primary">+43 (0) 5373 43298</a>
                <a href={"mailto:office@freisinger-niro.at"} className="duration-300 hover:text-primary">office@freisinger-niro.at</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full space-y-1.5 text-center text-gray-300 md:text-left mt-8 md:mt-0'>
            <span className="font-extrabold text-white">Metallbau Freisinger</span>
            <span className="font-extrabold text-white">Maschinenpark</span>
            <span className="font-extrabold text-white">Aktuelles</span>
            <span className="font-extrabold text-white">Zertifikate</span>
            <span className="font-extrabold text-white">Karriere</span>
          </div>
          <div className='flex flex-col w-full space-y-1 mt-5 md:mt-0'>
            <div className='flex flex-col space-y-1.5 text-center text-gray-300 md:text-left'>
              <span className="font-extrabold text-white">Impressum</span>
              <span className="font-extrabold text-white">Datenschutz</span>
              <span className="font-extrabold text-white">Pflegehinweise</span>
              <div>
                <div onClick={() => setLeistungenOpen(!isLeistungenOpen)} className="relative inline-flex items-center  font-extrabold text-white duration-300 cursor-pointer">
                  Leistungen
                  <svg className={`ml-1 -right-4 duration-700 ${isLeistungenOpen && "rotate-90"}`} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                       <path d="M3.35958 0L2.0625 1.29663L6.34288 5.50183L2.0625 9.70338L3.35958 11L8.9375 5.50183L3.35958 0Z" fill="#24d9fe"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="11" height="11" fill="white" transform="translate(11) rotate(90)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <AnimatePresence>
                  {isLeistungenOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.8 }}
                      className="grid grid-cols-2 mt-2"
                    >
                      {serviceItems.map((item, index) => (
                        <Link href={'/leistungen/'} key={index} className='duration-300 hover:translate-x-2 hover:text-primary'>
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className={"w-1/3"}></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer