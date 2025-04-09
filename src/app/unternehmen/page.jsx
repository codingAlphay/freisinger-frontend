"use client"
import React from 'react'
import PageWrapper from "../components/full/PageTransition";
import { PageContainer } from "../components/layout/utils/Container"
import { Title, SubTitle, Text} from "../components/layout/utils/Text";
import { FadeInY } from "../components/layout/utils/FadeIn";
import { motion } from "framer-motion";
import CircularText from "../components/layout/utils/CircularText";

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
        {/* <Container className={"pt-48"}>
            <Title className={"text-7xl font-bold text-primary"}>
            Generationenübergreifender
            Familienbetrieb
            </Title>
        </Container> */}
        <PageContainer className={"min-h-screen flex flex-col w-full items-center justify-center text-center"}>
          <FadeInY value={150} delay={0.7}>
            <Title className={"mx-auto max-w-3xl my-8 uppercase relative"}>
              Generationenübergreifender <br /><span className="font-bold">Familienbetrieb</span> 
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
              Was 2000 als Ein-Mann-Betrieb begann, ist heute ein zertifizierter Spezialist für hochwertige Metallverarbeitung in Tirol. Michael Freisinger – damals jüngster Schlossermeister des Landes – gründete in Ebbs einen Betrieb, der seit über zwei Jahrzehnten für Qualität, Zuverlässigkeit und echte Handwerkskunst steht.
            </Text>
          </FadeInY>
        </PageContainer>
        <PageContainer>
          <div className='grid max-w-2xl grid-cols-12 mx-auto sm:px-8 mb-36'>
          {companyHistory.map((entry, idx) => (
              <React.Fragment key={entry.id}>
                <FadeInY value={50} delay={0.1 * (idx + 1)} className='col-span-3 text-lg p-1 py-2 font-bold border-b-[1px] border-zinc-800 text-gray-100'>{entry.Year}</FadeInY>
                <FadeInY value={50} delay={0.1 * (idx + 1)} className='col-span-9 p-1 py-2 border-b-[1px] border-zinc-800 text-gray-300'>{entry.History}</FadeInY>
              </React.Fragment>
            ))}
          </div>
        </PageContainer>
    </PageWrapper>
  );
}
