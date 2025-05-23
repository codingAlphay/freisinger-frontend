"use client"
import Link from 'next/link'
import { MENU_ITEMS } from './Navbar'
import { motion } from 'framer-motion';
import { SubTitle, Title } from '../../utils/Text';
import { useState, useEffect } from 'react'

const MobileNavContent = ({ toggleNav, serviceItems }) => {

  const [showServices, setShowServices] = useState(false)

  const handleServices = () => {
    setShowServices((prev) => !prev)
  }


  return (
    <motion.div
      className="absolute top-0 left-0 z-10 w-full h-screen overflow-hidden bg-darkgray/70 backdrop-blur-md lg:hidden"
      id="navcontent"
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.89, 0, 0.11, 1] }}
    >
      <div className="flex flex-col h-screen mx-auto lg:grid lg:grid-cols-2 max-w-7xl">
        <div className="relative py-4 mb-20 lg:mr-20 xl:mr-56">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: 0 }}
            animate={{ x: showServices ? '-100%' : 0 }}
            transition={{ duration: 0.6, ease: [0.68, 0, 0.32, 1] }}
          >
            <ul className="flex flex-col justify-center h-screen px-6 space-y-4 text-3xl font-extrabold text-white uppercase">
              {MENU_ITEMS.map((item) => {
                if (item.isServices) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center duration-300 cursor-none hover:translate-x-2 hover:text-primary"
                      onClick={handleServices}
                    >
                      {item.label} 
                      <div className='scale-150'>
                        <svg className='ml-2' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_53_218)"><path d="M3.35958 6.6516e-08L2.0625 1.29663L6.34288 5.50183L2.0625 9.70338L3.35958 11L8.9375 5.50183L3.35958 6.6516e-08Z" fill="#24d9fe"/></g><defs><clipPath id="clip0_53_218"><rect width="11" height="11" fill="white" transform="translate(11) rotate(90)"/></clipPath></defs></svg>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="duration-300 hover:translate-x-2 hover:text-primary"
                      onClick={toggleNav}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  )
                }
              })}
              {/* Hier können ggf. auch Social-Links integriert werden */}
            </ul>
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: '100%' }}
            animate={{ x: showServices ? 0 : '100%' }}
            transition={{ duration: 0.6, ease: [0.68, 0, 0.32, 1] }}
          >
            <ul className="flex flex-col justify-center h-screen px-6 text-2xl font-extrabold text-white">
              <span className={"text-xl flex items-center uppercase text-white opacity-70"} onClick={handleServices}>
                <div className='relative z-20 pr-2'>
                  <svg className='ml-2 rotate-180' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_53_218)"><path d="M3.35958 6.6516e-08L2.0625 1.29663L6.34288 5.50183L2.0625 9.70338L3.35958 11L8.9375 5.50183L3.35958 6.6516e-08Z" fill="#fff"/></g><defs><clipPath id="clip0_53_218"><rect width="11" height="11" fill="white" transform="translate(11) rotate(90)"/></clipPath></defs></svg>
                </div>
                Zurück
              </span>
              <Title className={"py-2 pl-2 text-4xl uppercase text-primary"}>Leistungen</Title>
              {serviceItems.map((service) => (
                <div
                  key={service.title}
                  className="group"
                >
                  <Link
                    href={`${service.url}`}
                    className="block w-full py-2 text-white uppercase"
                    onClick={toggleNav}
                  >
                    <div className="flex items-center">
                      <div className="pl-2 duration-300 group-hover:translate-x-2 group-hover:text-primary">
                        {service.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileNavContent