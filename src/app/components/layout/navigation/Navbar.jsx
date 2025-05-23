"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTransitionRouter } from "next-view-transitions"
import { motion, AnimatePresence } from 'framer-motion'
import DesktopNavContent from './DesktopNavContent'
import MobileNavContent from './MobileNavContent'
import { usePathname } from 'next/navigation'

export const MENU_ITEMS = [
  { label: 'Metallbau Freisinger', href: '/unternehmen' },
  { label: 'Maschinenpark', href: '/maschinen' },
  { label: 'Aktuelles', href: '/aktuelles' },
  { label: 'Zertifikate', href: '/zertifikate' },
  { label: 'Leistungen', isServices: true },
  { label: 'Karriere', href: '/karriere' },
]

const Navbar = ({data}) => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const transitionRouter = useTransitionRouter()
  const pathname = usePathname()

  const serviceItems = data.map(service => ({
    id: service.id,
    title: service.displayName,
    image: service.mainImage.url,
    url: "/leistungen/"+service.serviceName
  }))
  
  const logoVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.9, ease: [0.89, 0, 0.11, 1] }
    }
  }

  const burgerVariants = {
    hidden: { opacity: 0, y: 38 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.89, 0, 0.11, 1] }
    }
  }

  const toggleNav = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('max-h-screen', 'overflow-hidden');
    } else {
      document.body.classList.remove('max-h-screen', 'overflow-hidden');
    }
  }

  const scrollIn = () => {
    setScrolled(window.scrollY >= 20)
  }

  useEffect(() => {
    setScrolled(window.scrollY >= 20)
    window.addEventListener('scroll', scrollIn)
    return () => window.removeEventListener('scroll', scrollIn)
  }, [])

  return (
    <header className={`w-[101%] mx-auto z-40 fixed duration-200 ${scrolled ? 'h-[inherit] bg-black/70 backdrop-blur-sm' : 'bg-transparent h-[inherit]'} ${isOpen ? 'bg-transparent' : ''}`}>
      <div className="h-[inherit] flex max-w-7xl items-center mx-auto px-6 justify-between z-20 relative">
        <Link 
          href="/" 
          className="relative flex items-center cursor-none" 
          onClick={(e) => {
            e.preventDefault()
            isOpen ? toggleNav : () => setOpen(false)
            transitionRouter.push("/", {
              onTransitionReady: pageAnimation,
            })
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            className={`relative overflow-hidden transition-all duration-200 ${scrolled ? 'h-18 w-32' : 'h-28 w-32 sm:h-28 sm:w-48'}`}
          >
            <motion.div
              variants={logoVariants}
              className='h-[inherit] w-[inherit]'
            >
              <Image
                src="/images/metallbau-freisinger-logo.png"
                fill
                alt="logo"
                className="pointer-events-none cursor-none"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        </Link>
        <DesktopNavContent serviceItems={serviceItems} scrolled={scrolled} transitionRouter={transitionRouter} pathname={pathname} pageAnimation={pageAnimation} />
        <motion.div
            initial="hidden"
            animate="visible"
            className={`relative overflow-hidden lg:hidden`}
          >
          <motion.div
            variants={burgerVariants}
            id="burger-button"
            className="flex items-center p-3 duration-200 cursor-none hover:scale-110"
            onClick={toggleNav}
            >
            <span className="mr-2 text-white">{!isOpen ? 'MENU' : 'SCHLIEßEN'}</span>
            <div className={`grid grid-cols-2 gap-1 duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                <div className={`w-1 h-1 p-1 duration-300 rounded-full ${isOpen ? 'bg-primary' : 'bg-white'}`} />
                <div className={`w-1 h-1 p-1 duration-300 rounded-full ${isOpen ? 'bg-primary' : 'bg-white'}`} />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && <MobileNavContent serviceItems={serviceItems} toggleNav={toggleNav} />}
      </AnimatePresence>
    </header>
  )  
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      { opacity: 1, scale: 1, transform: "translateY(0)", cursor: "none" },
      { opacity: 0, scale: 0.95, transform: "translateY(-100px)", cursor: "none" }
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.96, 0, 0.04, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)"
    }
  )

  document.documentElement.animate(
    [
      { transform: "translateY(100%)", scaleX: 0, cursor: "none" },
      { transform: "translateY(0)", scaleX: 1, cursor: "none" }
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.96, 0, 0.04, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)"
    }
  )
}

export default Navbar