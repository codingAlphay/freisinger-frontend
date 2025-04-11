"use client"
import React from 'react'
import PageWrapper from "../components/full/PageTransition"
import { PageContainer } from "../components/layout/utils/Container"
import { Title, SubTitle, Text} from "../components/layout/utils/Text"
import { FadeInY } from "../components/layout/utils/FadeIn"
import CircularText from "../components/layout/utils/CircularText"
import Image from 'next/image'

export default function Home() {

  const companyHistory = [
    {
      id: 1,
      Year: "2000",
      History: "Gründung des Unternehmens und Beginn der Metallverarbeitung mit innovativen Fertigungstechniken."
    },
    {
      id: 2,
      Year: "2005",
      History: "Einführung eines neuen Schweißverfahrens, das präzisere und langlebigere Konstruktionen ermöglicht."
    },
    {
      id: 3,
      Year: "2010",
      History: "Ausbau der Produktpalette um individuelle Stahlgeländer und dekorative Metallstrukturen."
    },
    {
      id: 4,
      Year: "2015",
      History: "Entwicklung von nachhaltigen Fertigungsmethoden und Einsatz moderner Recycling-Technologien."
    },
    {
      id: 5,
      Year: "2020",
      History: "Innovative Integration von CNC-Technologie für höchste Präzision in der Fertigung."
    },
    {
      id: 6,
      Year: "2023",
      History: "Erfolgreiche Umsetzung von kundenspezifischen Projekten mit High-End-Metallveredelung."
    }
  ]

  return (
    <PageWrapper>        
        <PageContainer className={"flex flex-col w-full text-center pt-48 md:pt-58"}>
          <FadeInY value={150} delay={0.7}>
            <Title className={"mx-auto max-w-3xl my-8 uppercase relative"}>
              Generationen übergreifender <br /><span className="font-bold">Familienbetrieb</span> 
              <CircularText
                text="QUALITÄT*SEIT*2000*"
                onHover="speedUp"
                spinDuration={50}
                className="absolute right-20 -top-22 opacity-30"
              />
            </Title>
          </FadeInY>
          <FadeInY value={150} delay={1} className={"my-10"}>
            <SubTitle className={"mx-auto my-4 uppercase relative"}>
              Handwerk aus Leidenschaft – seit über zwei Jahrzehnten
            </SubTitle>
            <Text className={""}>
              Was 2000 als Ein-Mann-Betrieb begann, ist heute ein zertifizierter Spezialist für hochwertige Metallverarbeitung in Tirol. Michael Freisinger – damals jüngster Schlossermeister des Landes – gründete in Ebbs einen Betrieb, der seit über zwei Jahrzehnten für Qualität, Zuverlässigkeit und echte Handwerkskunst steht. <br /> <br />
              Wir legen größten Wert auf die getrennte Bearbeitung von Edelstahl, Aluminium und Stahl – nicht nur in der Lagerung, sondern auch bei Werkzeugen und Maschinen. Diese Sorgfalt sichert die Langlebigkeit und makellose Qualität unserer Produkte.
            </Text>
          </FadeInY>
          <div className='grid w-full max-w-lg grid-cols-2 gap-8 mx-auto my-16'>
            <FadeInY value={150} delay={1.3} className='group'>
              <div className='relative w-full h-72'>
                <Image alt='Michael Freisinger' className="object-cover duration-500 opacity-30 group-hover:opacity-80" fill src={"/images/avatar.jpg"} />
              </div>
              <SubTitle className={"my-3 uppercase tracking-wide text-lg"}>Michael Freisinger</SubTitle>
            </FadeInY>
            <FadeInY value={150} delay={1.3} className='group'>
              <div className='relative w-full h-72'>
                <Image alt='Michael Freisinger' className="object-cover duration-500 opacity-30 group-hover:opacity-80" fill src={"/images/avatar.jpg"} />
              </div>
              <SubTitle className={"my-3 uppercase tracking-wide text-lg"}>Renate Freisinger</SubTitle>
            </FadeInY>
          </div>
        </PageContainer>
        <PageContainer className={"my-48 flex justify-center items-center"}>
          <iframe name="flow balance" src="https://schau-di-um.at/niederndorf/partner/freisinger-metallbau/" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" style={{width: '100%', height: '500px', border: 'none', margin: '32px 16px', borderRadius: '10px' }} />
        </PageContainer>
        <PageContainer>
          <FadeInY value={150} className={"my-20 text-center"}>
            <SubTitle className={"mx-auto my-4 uppercase relative"}>
              Meilensteine
            </SubTitle>
            <Text className={""}>
              Was 2000 als Ein-Mann-Betrieb begann, ist heute ein zertifizierter Spezialist für hochwertige Metallverarbeitung in Tirol. Michael Freisinger – damals jüngster Schlossermeister des Landes – gründete in Ebbs einen Betrieb, der seit über zwei Jahrzehnten für Qualität, Zuverlässigkeit und echte Handwerkskunst steht.
            </Text>
          </FadeInY>
          <div className='grid max-w-2xl grid-cols-12 mx-auto sm:px-8 mb-36'>
          {companyHistory.map((entry, idx) => (
              <React.Fragment key={entry.id}>
                <FadeInY value={50} delay={0.1 * (idx + 1)} className='col-span-3 text-lg p-1 py-4 font-bold border-b-[1px] border-zinc-800 text-gray-100'>{entry.Year}</FadeInY>
                <FadeInY value={50} delay={0.1 * (idx + 1)} className='col-span-9 p-1 py-4 border-b-[1px] border-zinc-800 text-gray-300'>{entry.History}</FadeInY>
              </React.Fragment>
            ))}
          </div>
        </PageContainer>
    </PageWrapper>
  )
}
