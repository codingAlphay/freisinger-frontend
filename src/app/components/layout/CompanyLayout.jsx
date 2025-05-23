"use client"

import React, { useEffect } from 'react'
import { PageContainer } from "../utils/Container"
import { Title, SubTitle, Text} from "../utils/Text"
import { FadeInY } from "../utils/FadeIn"
import CircularText from "../utils/CircularText"
import Image from 'next/image'

export default function CompanyContent({ data }) {

  const {
    firstTitle,
    secondTitle,
    colTitle,
    description,
    milestoneTitle,
    milestoneDescrption,
    personaBlock,
    milestoneContainer
  } = data;


  // Entfernen von Grafiken im 360°
  useEffect(() => {
    document.getElement
  }, [])


    return (
        <>
            <PageContainer className={"flex flex-col w-full text-center pt-48 md:pt-58"}>
            <FadeInY value={100} delay={0.3}>
                <Title className={"mx-auto max-w-3xl my-8 uppercase relative"}>
                {firstTitle} <br /><span className="font-bold">{secondTitle}</span> 
                <CircularText
                    text="QUALITÄT*SEIT*2000*"
                    onHover="speedUp"
                    spinDuration={50}
                    className="absolute right-20 -top-22 opacity-30"
                />
                </Title>
            </FadeInY>
            <FadeInY delay={0.4} className={"h-0.5 w-12 rounded-full bg-primary/60 mx-auto my-3"}/>
            <FadeInY value={100} delay={0.5} className={"my-10"}>
                <SubTitle className={"mx-auto mb-4 uppercase relative"}>
                {colTitle}
                </SubTitle>
                <Text className={""}>
                {description}
                </Text>
            </FadeInY>
            <div className='grid justify-center w-full max-w-lg grid-cols-2 gap-8 mx-auto my-12'>
                {personaBlock.map((persona, idx) => (
                  <div key={persona.id}>
                    <FadeInY value={100} delay={0.6} className='group'>
                      <div className='relative w-full h-72 aspect-[2/3]'>
                        <Image 
                          alt={persona.personaName} 
                          className="object-cover duration-500 opacity-30 group-hover:opacity-80 grayscale group-hover:grayscale-0"
                          fill 
                          src={persona.personaImage.url} 
                        />
                      </div>
                      <SubTitle className={"my-3 uppercase tracking-wide text-lg"}>
                        {persona.personaName}
                      </SubTitle>
                    </FadeInY>
                  </div>
                ))}
            </div>
            </PageContainer>
            <PageContainer className={"my-32 flex justify-center items-center"}>
            <iframe name="flow balance" src="https://schau-di-um.at/niederndorf/partner/freisinger-metallbau/" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" style={{width: '100%', height: '500px', border: 'none', margin: '32px 16px', borderRadius: '10px' }} />
            </PageContainer>
            <PageContainer>
            <FadeInY value={100} className={"my-20 text-center"}>
                <SubTitle className={"mx-auto my-4 uppercase relative"}>
                {milestoneTitle}
                </SubTitle>
                <FadeInY className={"h-0.5 w-12 rounded-full bg-primary/60 mx-auto my-6"}/>
                <Text className={""}>
                {milestoneDescrption}
                </Text>
            </FadeInY>
            <div className='grid max-w-2xl grid-cols-12 mx-auto text-sm sm:px-8 mb-36'>
            {milestoneContainer.map((entry, idx) => (
                <React.Fragment key={entry.id}>
                    <FadeInY value={100} delay={0.02 * idx} className='col-span-3 text-lg p-1 py-4 font-bold border-y-[1px] border-zinc-800 text-gray-100'>{entry.year}</FadeInY>
                    <FadeInY value={100} delay={0.02 * idx} className='col-span-9 p-1 py-4 border-y-[1px] border-zinc-800 text-gray-300'>{entry.entry}</FadeInY>
                </React.Fragment>
                ))}
            </div>
            </PageContainer>
        </>
    )
}