"use client"

import { Button } from "../utils/Button";
import { PageContainer } from "../utils/Container";
import { Title, SubTitle, Text } from "../utils/Text";
import { FadeInY } from "../utils/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

export default function Homepage({ data }) {
    
    const serviceItems = data.services.map(service => ({
      id: service.id,
      title: service.displayName,
      image: service.mainImage.url,
      url: "/leistungen/"+service.serviceName
    }))

    return (
        <>
            <PageContainer className={"my-36 text-center"}>
            <FadeInY value={100}>
                <Title className={"mx-auto max-w-3xl"}>
                    <span className="font-bold">
                        {data.introBlock.firstTitle}
                    </span> <br /> 
                        {data.introBlock.secondTitle}
                </Title>
            </FadeInY>
            <FadeInY value={100} className={"h-0.5 w-12 rounded-full bg-primary/60 mx-auto my-8"}/>
            <FadeInY value={100}>
                <Text>
                    {data.introBlock.description}
                </Text>
            </FadeInY>
            <FadeInY value={100} className={"my-8 max-w-3xl mx-auto"}>
                <div
                  className="relative py-8 overflow-hidden whitespace-nowrap"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
                  }}
                >
                  <motion.div
                    className="flex items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    {[...data.partners, ...data.partners, ...data.partners, ...data.partners, ...data.partners].map((partner,id) => (
                      <div key={id} className="flex-shrink-0 h-10 mx-8 pointer-events-none opacity-45">
                        <img
                          src={partner.url}
                          alt={partner.name}
                          className="object-contain h-full pointer-events-none grayscale"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
            </FadeInY>
            </PageContainer>
            <PageContainer>
            <FadeInY value={100}>
                <Title className={"mx-auto max-w-3xl text-center"}>
                    <span className="font-bold">
                        {data.serviceBlock.firstTitle}
                    </span> <br />
                        {data.serviceBlock.secondTitle}
                </Title>
            </FadeInY>
            <FadeInY value={100} className={"h-0.5 w-12 rounded-full bg-primary/60 mx-auto my-8"}/>
            <FadeInY value={100} >
                <Text className={"text-center"}>
                    {data.serviceBlock.description}
                </Text>
            </FadeInY>
            <div className={"py-20 pb-48"} >
                {/* <div className="relative col-span-1 translate-y-28">
                    <motion.div className="top-0 duration-500" style={{position:positionTransform}}>
                    <FadeInY value={50}>
                            <Title className={""}>
                            Unsere <br />
                            <span className="font-bold">Kernleistungen</span>
                            </Title>
                            <span className="text-sm tracking-wider uppercase opacity-80">seit 2000</span>
                            <Text className="max-w-md my-8">
                            Alte traditionelle Handwerksschmiedekunst wird mit dem modernen Material Edelstahl kombiniert. Man kann das Material im Innen- und Außenbereich verwenden. 
                            </Text>
                    </FadeInY>
                    </motion.div>
                </div> */}
                <div className="grid w-full max-w-4xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {serviceItems.map((item, index) => (
                    <div key={item.id} className="inline-block cursor-none group">
                        <Link href={item.url} className="cursor-none">
                            <FadeInY value={100} className={"border-t-2 border-primary/60"} delay={0.1 * index}>
                                <div className="relative flex items-end justify-end w-full overflow-hidden aspect-video">
                                <SubTitle className={"font-extrabold tracking-wide transition-all absolute top-3 left-3 z-10"}>
                                    {item.title}
                                </SubTitle>
                                <Image src={item.image} alt={item.title} className="object-cover duration-700 group-hover:scale-125" fill />
                                <Button className={" scale-[0.85] relative z-10"}>Mehr Erfahren</Button>
                                <div className="absolute inset-0 z-[5] w-full transition-all bg-gradient-to-b from-zinc-950/60 group-hover:from-zinc-950/80 to-transparent"></div>
                                <div className="absolute inset-0 z-[5] w-full transition-all bg-gradient-to-t from-zinc-950/80 group-hover:from-zinc-950/80 to-transparent"></div>
                                </div>
                            </FadeInY>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            </PageContainer>
            <PageContainer className={"text-center flex items-center flex-col pb-16"}>
            <FadeInY value={100} className={"my-8"}>
                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.53034 43.0833H3.9165V35.25C5.82784 35.2461 6.98717 34.1612 7.29267 32.6454C9.78759 23.0065 19.685 0 46.4593 0C73.4373 0 83.605 24.0288 86.7775 32.9509C87.365 34.5998 88.5752 35.2383 90.0832 35.2383L90.0871 43.0833H85.4654C87.7175 44.8811 90.0832 48.41 90.0832 55.3464C90.0832 61.7306 86.5425 69.7833 78.8149 73.0928C70.3823 86.5858 59.1258 94 46.9998 94C34.8738 94 23.6173 86.5858 15.1848 73.0928C7.45325 69.7833 3.9165 61.7306 3.9165 55.3464C3.9165 48.41 6.27825 44.8811 8.53034 43.0833ZM55.6165 72.2978H38.3832C38.3988 72.3447 40.835 79.1127 46.9998 79.1127C53.3997 79.1127 55.6008 72.3447 55.6165 72.2978ZM73.3081 43.0833H20.6877L20.6368 45.1004C20.6368 47.7168 17.9656 49.4636 15.5921 48.4061C14.9302 48.1123 13.9079 48.1202 13.1755 48.598C9.58392 50.9519 9.97167 63.732 18.7568 66.7283C22.3444 67.9542 28.0158 78.8817 34.1493 68.2871C36.2721 64.6289 42.9657 64.2177 46.9998 67.1238C51.0301 64.2177 57.7276 64.6289 59.8465 68.2871C65.98 78.8817 71.6513 67.9542 75.2429 66.7283C84.0319 63.732 84.4118 50.9519 80.8203 48.598C79.9782 48.0497 78.9128 48.1828 78.4076 48.4061C76.0341 49.4675 73.359 47.7168 73.359 45.1004L73.3081 43.0833ZM35.3321 46.9843C32.8489 46.9843 30.8436 49.4127 30.8436 52.4089C30.8436 55.4052 32.8489 57.8335 35.3321 57.8335C37.8074 57.8335 39.8206 55.4052 39.8206 52.4089C39.8206 49.4127 37.8074 46.9843 35.3321 46.9843ZM63.1561 52.4089C63.1561 55.4052 61.1468 57.8335 58.6676 57.8335C56.1883 57.8335 54.1791 55.4052 54.1791 52.4089C54.1791 49.4127 56.1883 46.9843 58.6676 46.9843C61.1468 46.9843 63.1561 49.4127 63.1561 52.4089ZM43.0832 8.00175C40.2044 8.2955 37.5998 8.95742 35.2498 9.8935V23.5C35.2498 25.662 33.4952 27.4167 31.3332 27.4167C29.1712 27.4167 27.4165 25.662 27.4165 23.5V14.6131C18.9839 21.7297 15.7253 32.289 14.9223 35.25H79.1361C77.8318 31.3098 74.4792 21.6983 66.5832 14.9734V23.5C66.5832 25.662 64.8285 27.4167 62.6665 27.4167C60.5045 27.4167 58.7498 25.662 58.7498 23.5V10.1598C56.4038 9.1885 53.7992 8.47175 50.9165 8.1075V19.5833C50.9165 21.7453 49.1618 23.5 46.9998 23.5C44.8378 23.5 43.0832 21.7453 43.0832 19.5833V8.00175Z" fill="#E0E0E0"/>
                </svg>
            </FadeInY>
            <FadeInY value={100}>
                <Title className={""}>
                Bereit für den Metallbau? <br />
                <span className="font-bold">Wir stellen ein!</span>
                </Title>
            </FadeInY>
            <FadeInY value={100}>
                <Button className={"p-2 pb-2 mt-10 relative z-10"}>Mehr Erfahren</Button>
            </FadeInY>
            </PageContainer>
        </>
    )
}