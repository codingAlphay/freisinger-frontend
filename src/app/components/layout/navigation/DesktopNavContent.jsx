import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_ITEMS } from './Navbar'
import { useState } from 'react'

const DesktopNavContent = ({scrolled, pathname, transitionRouter, pageAnimation}) => {
    const [showServicesPanel, setShowServicesPanel] = useState(false);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1,
          y: 0,
          transition: { duration: 1.9, ease: [0.89, 0, 0.11, 1] }
        }
      }
      
    const socialVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1,
            y: 0,
            transition: { duration: 1.9, delay: .3, ease: [0.89, 0, 0.11, 1] }
        }
    }
      
    return (
        <div className={`flex-col items-end hidden lg:flex ${scrolled ? 'space-y-1 pb-2' : 'space-y-2'}`}>
        <motion.ul
            initial={"hidden"}
            animate="visible"
            className="flex order-2 items-center space-x-8 text-[14px] font-semibold cursor-none tracking-wide overflow-hidden"
        >  
            {MENU_ITEMS.map((item) => {
            if (item.isServices) {
                return (
                <motion.li 
                    key={item.label} 
                    variants={itemVariants} 
                    className="relative flex items-center group"
                    onMouseEnter={() => setShowServicesPanel(true)}
                    onMouseLeave={() => setShowServicesPanel(false)}
                >
                    <span className="p-1 text-white transition-all duration-300 group navitem group-hover:text-primary">
                        {item.label}
                    </span>
                    <svg className='ml-1 duration-700 group-hover:rotate-90' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_53_218)"><path d="M3.35958 6.6516e-08L2.0625 1.29663L6.34288 5.50183L2.0625 9.70338L3.35958 11L8.9375 5.50183L3.35958 6.6516e-08Z" fill="#24d9fe"/></g><defs><clipPath id="clip0_53_218"><rect width="11" height="11" fill="white" transform="translate(11) rotate(90)"/></clipPath></defs></svg>
                    <AnimatePresence>
                        {showServicesPanel && (
                            <motion.div
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%' }}
                                transition={{ duration: 0.75, ease: [0.68, 0, 0.32, 1] }}
                                className="fixed top-0 left-0 w-screen h-[75vh] bg-darkgray/90 backdrop-blur-md z-[-1]"
                                onMouseEnter={() => setShowServicesPanel(true)}
                                onMouseLeave={() => setShowServicesPanel(false)}
                            >
                                {/* Hier kannst du optional Inhalt der Services-Fläche einfügen */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.li>
                )
            } else {
                return (
                <motion.li key={item.label} variants={itemVariants} className="relative">
                    <Link 
                    href={item.href}
                    className={`relative p-1 transition-all duration-300 cursor-none navitem ${pathname === item.href ? 'text-primary' : ' text-white hover:text-primary'}`}
                    onClick={(e) => {
                        e.preventDefault()
                        transitionRouter.push(item.href, {
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
        <motion.div 
            className={`order-1 overflow-hidden ${scrolled ? "my-2" : "mb-2" }`} 
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={socialVariants} className='flex space-x-1'>
            <a href="" className={`duration-500 cursor-none bg-darkgray hover:bg-primary group aspect-square ${scrolled ? "p-1" : "p-2"}`}>
                <svg width="20" height="21" viewBox="0 0 20 21" className={`duration-500 ${scrolled && "scale-90"}`} fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_58_47)"><path className='duration-500 group-hover:fill-darkgray' fillRule="evenodd" clipRule="evenodd" d="M4.41263 0.551697H15.8848C18.1481 0.551697 19.982 2.38536 19.982 4.64652V16.112C19.982 18.3732 18.1481 20.2069 15.8848 20.2069H13.8862V12.5962H16.4428L16.8255 9.62993H13.8862V7.73566C13.8862 6.87739 14.1246 6.29183 15.3571 6.29183L16.9287 6.29101V3.63756C16.6567 3.60152 15.7242 3.52045 14.6384 3.52045C12.3718 3.52045 10.8206 4.90286 10.8206 7.44165V9.62911H8.25744V12.5954H10.8206V20.2069H4.41263C2.15015 20.2069 0.31543 18.3732 0.31543 16.112V4.64652C0.31543 2.38536 2.15015 0.551697 4.41263 0.551697Z" fill="#24d9fe"/></g><defs><clipPath id="clip0_58_47"><rect width="19.6665" height="19.6552" fill="white" transform="translate(0.31543 0.551697)"/></clipPath></defs></svg>
            </a>
            <a href="" className={`duration-500 cursor-none bg-darkgray hover:bg-primary group aspect-square ${scrolled ? "p-1" : "p-2"}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" className={`duration-500 ${scrolled && "scale-90"}`} fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-darkgray' d="M13.298 5.04618C12.6072 5.01506 12.399 5.00851 10.6487 5.00851C8.89838 5.00851 8.69106 5.01506 8.00027 5.04618C6.22209 5.12726 5.39364 5.96915 5.31333 7.73157C5.28137 8.42277 5.274 8.62997 5.274 10.3793C5.274 12.1286 5.28137 12.3358 5.31251 13.027C5.39364 14.7861 6.21881 15.6313 7.99946 15.7124C8.69024 15.7435 8.89838 15.7509 10.6487 15.7509C12.3998 15.7509 12.6072 15.7443 13.298 15.7132C15.0761 15.6321 15.9038 14.7886 15.9849 13.0278C16.016 12.3366 16.0226 12.1294 16.0226 10.3801C16.0226 8.63079 16.016 8.42359 15.9849 7.73321C15.9038 5.96997 15.0745 5.12726 13.298 5.04618ZM10.6487 13.7436C8.7894 13.7436 7.28245 12.2375 7.28245 10.3793C7.28245 8.52105 8.79021 7.01497 10.6487 7.01497C12.5072 7.01497 14.015 8.52105 14.015 10.3793C14.015 12.2375 12.508 13.7436 10.6487 13.7436ZM14.1485 7.66851C13.7142 7.66851 13.3619 7.31635 13.3619 6.8823C13.3619 6.44825 13.7142 6.09609 14.1485 6.09609C14.5828 6.09609 14.9352 6.44825 14.9352 6.8823C14.9352 7.31635 14.5828 7.66851 14.1485 7.66851ZM12.8341 10.3793C12.8341 11.5856 11.8557 12.5635 10.6487 12.5635C9.44167 12.5635 8.46326 11.5856 8.46326 10.3793C8.46326 9.17295 9.44167 8.1951 10.6487 8.1951C11.8557 8.1951 12.8341 9.17295 12.8341 10.3793ZM16.3848 0.551697H4.91263C2.65015 0.551697 0.81543 2.38536 0.81543 4.64652V16.112C0.81543 18.3732 2.65015 20.2069 4.91263 20.2069H16.3848C18.6481 20.2069 20.482 18.3732 20.482 16.112V4.64652C20.482 2.38536 18.6481 0.551697 16.3848 0.551697ZM17.1649 13.0802C17.0567 15.4626 15.73 16.7828 13.352 16.8917C12.6522 16.9236 12.4293 16.931 10.6487 16.931C8.86806 16.931 8.64599 16.9236 7.94619 16.8917C5.56326 16.7828 4.24233 15.4601 4.13252 13.0802C4.10056 12.3817 4.09319 12.1589 4.09319 10.3793C4.09319 8.60049 4.10056 8.37691 4.13252 7.67833C4.24233 5.29678 5.5649 3.97579 7.94619 3.86769C8.64599 3.83493 8.86806 3.82756 10.6487 3.82756C12.4293 3.82756 12.6522 3.83493 13.352 3.86687C15.735 3.97579 17.0584 5.30088 17.1649 7.67752C17.1968 8.37691 17.2042 8.60049 17.2042 10.3793C17.2042 12.1589 17.1968 12.3817 17.1649 13.0802Z" fill="#24d9fe"/></svg>
            </a>
            <Link
                href={"/kontakt"}
                className={`text-sm uppercase duration-500 cursor-none bg-darkgray hover:bg-primary hover:text-darkgray ${scrolled ? "p-1" : "p-2"}`}
                onClick={(e) => {
                e.preventDefault()
                transitionRouter.push("/kontakt", {
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
                transitionRouter.push("/kontakt", {
                    onTransitionReady: pageAnimation,
                })
                }}
                >
                Metallbau Exklusiv
            </Link>
            </motion.div>
        </motion.div>
        </div>
    )
}

export default DesktopNavContent