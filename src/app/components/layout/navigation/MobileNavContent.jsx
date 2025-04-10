"use client"
import Link from 'next/link'
import { MENU_ITEMS } from './Navbar'
import { motion } from 'framer-motion';

const MobileNavContent = ({toggleNav}) => {

    const handleServices = () => {
      document.getElementById('default-nav')?.classList.remove('flex')
      document.getElementById('default-nav')?.classList.add('hidden')
      document.getElementById('services-nav')?.classList.remove('hidden')
      document.getElementById('services-nav')?.classList.add('flex')
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
        <div className="py-4 mb-20 lg:mr-20 xl:mr-56">
          <ul
            className="flex flex-col justify-center h-screen px-6 space-y-4 text-3xl font-extrabold text-white uppercase"
            id="default-nav"
          >
            {MENU_ITEMS.map((item) => {
              if (item.isServices) {
                return (
                  <div
                    key={item.label}
                    className="duration-300 cursor-none hover:translate-x-2 hover:text-primary"
                    onClick={handleServices}
                  >
                    {item.label} <span className="text-primary">&raquo;</span>
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
          <ul
            className="flex-col justify-center hidden h-screen px-6 text-2xl font-extrabold text-white"
            id="services-nav"
          >
            {/* {data?.data?.map((service) => (
              <div
                key={service.attributes.ServiceName}
                className="group"
              >
                <Link
                  href={`/leistungen/${service.attributes.ServiceName}`}
                  className="block w-full py-2 text-white uppercase"
                  onClick={toggleNav}
                >
                  <div className="flex items-center">
                    <span className="text-primary">&raquo;</span>
                    <div className="pl-2 duration-300 group-hover:translate-x-2 group-hover:text-primary">
                      {service.attributes.ServiceName}
                    </div>
                  </div>
                </Link>
              </div>
            ))} */}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileNavContent