"use client"
import PageWrapper from "./components/full/PageTransition";
import HeroSlider from "./components/layout/Heroslider";
import { Button } from "./components/layout/utils/Button";
import { PageContainer } from "./components/layout/utils/Container"
import { Title, SubTitle, Text} from "./components/layout/utils/Text";
import { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"
import { FadeInY } from "./components/layout/utils/FadeIn";
import Image from "next/image";

export const wohndesignItems = [
  { id: 1, title: 'Stahlbau', image: '/images/services/stahlbau.jpg' },
  { id: 2, title: 'Balkon/Geländer', image: '/images/services/balkon.jpg' },
  { id: 3, title: 'Einfahrtstore', image: '/images/services/tore.jpg' },
  { id: 4, title: 'Glasüberdachung', image: '/images/services/glasüberdachung.jpg' },
  { id: 5, title: 'Stahlbau', image: '/images/services/stahlbau.jpg' },
  { id: 6, title: 'Balkon/Geländer', image: '/images/services/balkon.jpg' },
  { id: 7, title: 'Einfahrtstore', image: '/images/services/tore.jpg' },
  { id: 8, title: 'Glasüberdachung', image: '/images/services/glasüberdachung.jpg' },
  { id: 9, title: 'Stahlbau', image: '/images/services/stahlbau.jpg' },
  { id: 10, title: 'Balkon/Geländer', image: '/images/services/balkon.jpg' },
  { id: 11, title: 'Einfahrtstore', image: '/images/services/tore.jpg' },
  { id: 12, title: 'Glasüberdachung', image: '/images/services/glasüberdachung.jpg' },
  { id: 13, title: 'Stahlbau', image: '/images/services/stahlbau.jpg' },
  { id: 14, title: 'Balkon/Geländer', image: '/images/services/balkon.jpg' },
  { id: 15, title: 'Einfahrtstore', image: '/images/services/tore.jpg' },
  { id: 16, title: 'Glasüberdachung', image: '/images/services/glasüberdachung.jpg' },
];

export default function Home() {
  const scrollRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const positionTransform = useTransform(
    scrollYProgress,
    [0, 0.00001, 0.99999, 1],
    ["absolute", "absolute", "sticky", "sticky"],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  )

  return (
    <PageWrapper>
      <div className="">
        <HeroSlider />
        <PageContainer className={"my-36 text-center"}>
          <FadeInY value={150} delay={0.1}>
            <Title className={"mx-auto max-w-3xl my-8"}>
              <span className="font-bold">Handwerk mit Handschlagqualität</span> <br /> Edelstahl, Stahl und Aluminium in Perfektion
            </Title>
          </FadeInY>
          <FadeInY value={150} delay={0.2}>
            <Text>
            Was 2000 als Ein-Mann-Betrieb begann, ist heute ein zertifizierter Spezialist für hochwertige Metallverarbeitung in Tirol. Michael Freisinger – damals jüngster Schlossermeister des Landes – gründete in Ebbs einen Betrieb, der seit über zwei Jahrzehnten für Qualität, Zuverlässigkeit und echte Handwerkskunst steht.
            </Text>
          </FadeInY>
        </PageContainer>
        <PageContainer>
          <FadeInY value={150} delay={0.1}>
            <Title className={"mx-auto max-w-3xl text-center my-8"}>
              <span className="font-bold">Unsere</span> <br /> Kernleistungen
            </Title>
          </FadeInY>
          <FadeInY value={150} delay={0.2}>
            <Text className={"text-center"}>
            Was 2000 als Ein-Mann-Betrieb begann, ist heute ein zertifizierter Spezialist für hochwertige Metallverarbeitung in Tirol. Michael Freisinger – damals jüngster Schlossermeister des Landes – gründete in Ebbs einen Betrieb, der seit über zwei Jahrzehnten für Qualität, Zuverlässigkeit und echte Handwerkskunst steht.
            </Text>
          </FadeInY>
          <div ref={scrollRef} className={"grid translate-y-10 grid-cols-1 py-20 pb-48 gap-x-8"} >
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {wohndesignItems.map((item, index) => (
                <div key={item.id} className="inline-block cursor-none group">
                  <FadeInY value={50} delay={0.05 * index}>
                    <SubTitle className={"font-extralight tracking-wide group-hover:font-normal transition-all"}>
                      {item.title}
                    </SubTitle>
                    <div className="relative flex items-end justify-end w-full mt-4 overflow-hidden aspect-video">
                      <Image src={item.image} alt={item.title} className="object-cover duration-700 group-hover:scale-125" fill />
                      <Button className={"p-1 pb-3 scale-90 relative z-20"}>Mehr Erfahren</Button>
                      <div className="absolute inset-0 z-10 w-full transition-all bg-gradient-to-t from-zinc-950/60 group-hover:from-zinc-950/80 to-transparent"></div>
                    </div>
                  </FadeInY>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </div>
    </PageWrapper>
  );
}
