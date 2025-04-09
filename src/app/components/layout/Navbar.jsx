"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTransitionRouter } from "next-view-transitions"
import { motion } from 'framer-motion'

// Konstanten-Array für die statischen Menüeinträge
const MENU_ITEMS = [
  { label: 'Metallbau Freisinger', href: '/unternehmen' },
  { label: 'Maschinenpark', href: '/maschinenpark' },
  { label: 'Aktuelles', href: '/aktuelles' },
  { label: 'Zertifikate', href: '/zertifikate' },
  { label: 'Leistungen', isServices: true },
  { label: 'Karriere', href: '/karriere' },
]

const Navbar = ({ data }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [initialAnimationDone, setInitialAnimationDone] = useState(false)
  const router = useTransitionRouter()

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.89, 0, 0.11, 1] }
    }
  }

  const toggleNav = () => {
    if (!isOpen) {
      setTimeout(() => {
        document.getElementById('navcontent').classList.remove('-translate-y-full')
      }, 100)
    }
    isOpen ? setOpen(false) : setOpen(true)
    if (!isOpen) {
      document.getElementsByTagName('body')[0].classList.add('max-h-screen', 'overflow-hidden')
    } else {
      document.getElementsByTagName('body')[0].classList.remove('max-h-screen', 'overflow-hidden')
    }
  }

  const handleServices = () => {
    document.getElementById('default-nav')?.classList.remove('flex')
    document.getElementById('default-nav')?.classList.add('hidden')
    document.getElementById('services-nav')?.classList.remove('hidden')
    document.getElementById('services-nav')?.classList.add('flex')
  }

  const scrollIn = () => {
    setScrolled(window.scrollY >= 20)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollIn)
    return () => window.removeEventListener('scroll', scrollIn)
  }, [])

  // Desktop-Navigation
  const DesktopNavContent = () => (
    <div className={`flex-col items-end hidden lg:flex ${scrolled ? 'space-y-1 pb-2' : 'space-y-2'}`}>
      <motion.ul
        // Nur beim allerersten Rendern den initial-Wert setzen – danach nicht mehr
        initial={!initialAnimationDone ? "hidden" : undefined}
        animate="visible"
        onAnimationComplete={() => {
          if (!initialAnimationDone) setInitialAnimationDone(true)
        }}
        className="flex order-2 items-center space-x-8 text-[14px] font-semibold cursor-nonepointer tracking-wide overflow-hidden"
      >  
        {MENU_ITEMS.map((item) => {
          if (item.isServices) {
            return (
              <motion.li key={item.label} variants={itemVariants} className="relative">
                <span className="relative p-1 pb-10 text-white transition-all duration-300 group navitem hover:text-primary">
                  {item.label}
                  <div className={`absolute left-0 flex flex-col px-3 py-2 pr-8 duration-300 rounded-md opacity-0 pointer-events-none group-hover:pointer-events-auto bg-zinc-900 top-10 ${
                    scrolled ? 'group-hover:top-12 group-hover:opacity-100' : 'group-hover:top-7 group-hover:opacity-80'
                  }`}>
                    {data?.data?.map((service) => (
                      <Link
                        href={'/leistungen/' + service.attributes.ServiceName}
                        key={service.attributes.ServiceName}
                        className="cursor-none w-full py-1.5 text-white border-b border-primary border-opacity-10 last:border-none"
                      >
                        <div className="flex items-center duration-300 hover:translate-x-2 hover:text-primary">
                          <span className="mr-1 text-lg text-primary">&raquo</span>
                          <div className="translate-y-[1px] whitespace-nowrap">
                            {service.attributes.ServiceName}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </span>
                <svg className='absolute -right-3 bottom-[5px]' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_53_218)"><path d="M3.35958 6.6516e-08L2.0625 1.29663L6.34288 5.50183L2.0625 9.70338L3.35958 11L8.9375 5.50183L3.35958 6.6516e-08Z" fill="#24d9fe"/></g><defs><clipPath id="clip0_53_218"><rect width="11" height="11" fill="white" transform="translate(11) rotate(90)"/></clipPath></defs></svg>
              </motion.li>
            )
          } else {
            return (
              <motion.li key={item.label} variants={itemVariants} className="relative">
                <Link 
                  href={item.href}
                  className="relative p-1 text-white transition-all duration-300 cursor-none navitem hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(item.href, {
                      onTransitionReady: pageAnimation,
                    })
                  }}
                >
                  {item.label}
                </Link>
              </motion.li>
            )
          }
        })}
      </motion.ul>
      <motion.div className={`flex order-1 ${scrolled ? "my-2" : "mb-2" }`} variants={itemVariants}>
        <a href="" className='p-2 duration-500 cursor-none bg-darkgray hover:bg-primary group aspect-square'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_58_47)"><path className='duration-500 group-hover:fill-darkgray' fillRule="evenodd" clipRule="evenodd" d="M4.41263 0.551697H15.8848C18.1481 0.551697 19.982 2.38536 19.982 4.64652V16.112C19.982 18.3732 18.1481 20.2069 15.8848 20.2069H13.8862V12.5962H16.4428L16.8255 9.62993H13.8862V7.73566C13.8862 6.87739 14.1246 6.29183 15.3571 6.29183L16.9287 6.29101V3.63756C16.6567 3.60152 15.7242 3.52045 14.6384 3.52045C12.3718 3.52045 10.8206 4.90286 10.8206 7.44165V9.62911H8.25744V12.5954H10.8206V20.2069H4.41263C2.15015 20.2069 0.31543 18.3732 0.31543 16.112V4.64652C0.31543 2.38536 2.15015 0.551697 4.41263 0.551697Z" fill="#24d9fe"/></g><defs><clipPath id="clip0_58_47"><rect width="19.6665" height="19.6552" fill="white" transform="translate(0.31543 0.551697)"/></clipPath></defs></svg>
        </a>
        <a href="" className='p-2 duration-500 cursor-none bg-darkgray hover:bg-primary group aspect-square'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-darkgray' d="M13.298 5.04618C12.6072 5.01506 12.399 5.00851 10.6487 5.00851C8.89838 5.00851 8.69106 5.01506 8.00027 5.04618C6.22209 5.12726 5.39364 5.96915 5.31333 7.73157C5.28137 8.42277 5.274 8.62997 5.274 10.3793C5.274 12.1286 5.28137 12.3358 5.31251 13.027C5.39364 14.7861 6.21881 15.6313 7.99946 15.7124C8.69024 15.7435 8.89838 15.7509 10.6487 15.7509C12.3998 15.7509 12.6072 15.7443 13.298 15.7132C15.0761 15.6321 15.9038 14.7886 15.9849 13.0278C16.016 12.3366 16.0226 12.1294 16.0226 10.3801C16.0226 8.63079 16.016 8.42359 15.9849 7.73321C15.9038 5.96997 15.0745 5.12726 13.298 5.04618ZM10.6487 13.7436C8.7894 13.7436 7.28245 12.2375 7.28245 10.3793C7.28245 8.52105 8.79021 7.01497 10.6487 7.01497C12.5072 7.01497 14.015 8.52105 14.015 10.3793C14.015 12.2375 12.508 13.7436 10.6487 13.7436ZM14.1485 7.66851C13.7142 7.66851 13.3619 7.31635 13.3619 6.8823C13.3619 6.44825 13.7142 6.09609 14.1485 6.09609C14.5828 6.09609 14.9352 6.44825 14.9352 6.8823C14.9352 7.31635 14.5828 7.66851 14.1485 7.66851ZM12.8341 10.3793C12.8341 11.5856 11.8557 12.5635 10.6487 12.5635C9.44167 12.5635 8.46326 11.5856 8.46326 10.3793C8.46326 9.17295 9.44167 8.1951 10.6487 8.1951C11.8557 8.1951 12.8341 9.17295 12.8341 10.3793ZM16.3848 0.551697H4.91263C2.65015 0.551697 0.81543 2.38536 0.81543 4.64652V16.112C0.81543 18.3732 2.65015 20.2069 4.91263 20.2069H16.3848C18.6481 20.2069 20.482 18.3732 20.482 16.112V4.64652C20.482 2.38536 18.6481 0.551697 16.3848 0.551697ZM17.1649 13.0802C17.0567 15.4626 15.73 16.7828 13.352 16.8917C12.6522 16.9236 12.4293 16.931 10.6487 16.931C8.86806 16.931 8.64599 16.9236 7.94619 16.8917C5.56326 16.7828 4.24233 15.4601 4.13252 13.0802C4.10056 12.3817 4.09319 12.1589 4.09319 10.3793C4.09319 8.60049 4.10056 8.37691 4.13252 7.67833C4.24233 5.29678 5.5649 3.97579 7.94619 3.86769C8.64599 3.83493 8.86806 3.82756 10.6487 3.82756C12.4293 3.82756 12.6522 3.83493 13.352 3.86687C15.735 3.97579 17.0584 5.30088 17.1649 7.67752C17.1968 8.37691 17.2042 8.60049 17.2042 10.3793C17.2042 12.1589 17.1968 12.3817 17.1649 13.0802Z" fill="#24d9fe"/></svg>
        </a>
        <Link
          href={"/kontakt"}
          className='p-2 text-sm uppercase duration-500 cursor-none bg-darkgray hover:bg-primary hover:text-darkgray'
          onClick={(e) => {
            e.preventDefault()
            router.push("/kontakt", {
            onTransitionReady: pageAnimation,
            })
          }}
        >
          Angebot einholen
        </Link>
        <Link
          href={"/kontakt"}
          className='hidden p-2 duration-500 cursor-none bg-primary-exklusiv hover:bg-darkgray hover:text-primary'
          onClick={(e) => {
            e.preventDefault()
            router.push("/kontakt", {
            onTransitionReady: pageAnimation,
            })
          }}
        >
          Metallbau Exklusiv
        </Link>
      </motion.div>
    </div>
  )

  // Mobile-Navigation
  const NavContent = () => (
    <div
      className="absolute top-0 left-0 z-10 w-full h-screen overflow-hidden duration-700 -translate-y-full bg-zinc-900 lg:hidden"
      id="navcontent"
    >
      <div className="flex flex-col h-screen mx-auto lg:grid lg:grid-cols-2 max-w-7xl">
        <div className="py-4 mb-20 lg:mr-20 xl:mr-56">
          <ul
            className="flex flex-col justify-center h-screen px-6 space-y-4 text-3xl font-extrabold text-white uppercase"
            id="default-nav"
          >
            {MENU_ITEMS.map((item) => {
              if (item.isServices) {
                return (
                  <div
                    className="duration-300 cursor-nonepointer hover:translate-x-2 hover:text-primary"
                    onClick={handleServices}
                    key={item.label}
                  >
                    {item.label} <span className="text-primary">&raquo</span>
                  </div>
                )
              } else {
                return (
                  <Link
                    className="duration-300 hover:translate-x-2 hover:text-primary"
                    href={item.href}
                    onClick={toggleNav}
                    key={item.label}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )
              }
            })}
            {/* Hier können ggf. auch Social-Links integriert werden */}
          </ul>
          <ul
            className="flex-col justify-center hidden h-screen px-6 text-2xl font-extrabold text-white"
            id="services-nav"
          >
            {data.data.map((service) => (
              <div key={service.attributes.ServiceName} className="group">
                <Link
                  href={'/leistungen/' + service.attributes.ServiceName}
                  className="block w-full py-2 text-white uppercase"
                  onClick={toggleNav}
                >
                  <div className="flex items-center">
                    <span className="text-primary">&raquo</span>
                    <div className="pl-2 duration-300 group-hover:translate-x-2 group-hover:text-primary">
                      {service.attributes.ServiceName}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <header className={`w-[101%] mx-auto -mt-3 z-40 fixed duration-200 ${scrolled ? 'h-[inherit] bg-darkgray' : 'bg-transparent h-[inherit]'} ${isOpen ? 'bg-transparent' : ''}`}>
        <div className="h-[inherit] flex max-w-7xl items-center mx-auto px-6 pt-3 justify-between z-20 relative">
            <Link 
            href="/" 
            className="relative flex items-center cursor-none" 
            onClick={(e) => {
              e.preventDefault()
              isOpen ? toggleNav : () => setOpen(false)
              router.push("/", {
                onTransitionReady: pageAnimation,
              })
            }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.89, 0, 0.11, 1] }}
                className={`relative overflow-hidden transition-all duration-200 ${scrolled ? 'h-18 w-32' : 'h-28 w-32 sm:h-28 sm:w-48'}`}
              >
                <Image
                  src="/images/metallbau-freisinger-logo.png"
                  fill
                  alt="logo"
                  className="pointer-events-none cursor-nonepointer"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </Link>
            <DesktopNavContent />
            <div
            id="burger-button"
            className="flex items-center p-3 duration-200 cursor-nonepointer hover:scale-110 lg:hidden"
            onClick={toggleNav}
            >
            <span className="mr-2 text-white">{!isOpen ? 'MENU' : 'SCHLIEßEN'}</span>
            <div className={`grid grid-cols-2 gap-1 duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                <div className={`w-1 h-1 p-1 duration-300 rounded-full ${isOpen ? 'bg-primary' : 'bg-white'}`} />
                <div className={`w-1 h-1 p-1 duration-300 rounded-full ${isOpen ? 'bg-primary' : 'bg-white'}`} />
            </div>
            </div>
        </div>
        {isOpen && <NavContent />}
    </header>
  )  
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      { opacity: 1, scale: 1, transform: "translateY(0)", cursor: "none" },
      { opacity: 0, scale: 0.9, transform: "translateY(-100px)", cursor: "none" }
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