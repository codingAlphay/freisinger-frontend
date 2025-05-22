"use client"

import { PageContainer } from "../utils/Container"
import Image from "next/image"
import { SliderTitle, Title, Text, SubTitle } from "../utils/Text"
import { FadeInY } from "../utils/FadeIn"
import ExpoSlider from "./components/ExpoSlider"

export default function ServiceLayout({ data }) {

    const images = data.imageSlider?.map(image => ({
        url: image.url
    }))

    return (
        <>
            <div className="w-full h-[100vh] md:h-[70vh] relative">
                <div className="w-full h-[100vh] md:h-[70vh] absolute z-1 pointer-events-none bg-gradient-to-b from-zinc-950/80 to-zinc-900/70"/>
                <div className="absolute bottom-0 flex flex-col w-full max-w-6xl px-6 -translate-x-1/2 z-2 left-1/2">
                    <FadeInY value={50} delay={.2}>
                        <Title className={"uppercase tracking-widest text-primary"}>
                            LEISTUNG
                        </Title>
                    </FadeInY>
                    <FadeInY value={50} delay={.3}>
                        <SliderTitle className={"font-bold mb-10"}>
                            {data.displayName}
                        </SliderTitle>
                    </FadeInY>
                </div>
                <Image 
                    src={data.mainImage.url}
                    fill
                    className="object-cover"
                    alt={data.displayName}
                />
            </div>
            <div className="w-full h-[100vh] md:h-[30vh] flex items-center">
                <PageContainer>
                    <FadeInY value={50} delay={.4}>
                        <Text className={"leading-relaxed"}>{data.serviceDescription}</Text>
                    </FadeInY>
                </PageContainer>
            </div>
            <PageContainer className={"my-32"}>
                {data.infoBlock.map((item, idx) => (
                    <div key={idx} className="my-20">
                        <FadeInY value={50} className={""}>
                            <div className="grid items-center gap-8 md:grid-cols-2">
                                <div className="order-2 space-x-2">
                                    <SubTitle className={"mb-4 lg:text-3xl"}>
                                        <span className="font-bold">
                                            {item.firstTitle}
                                        </span> <br /> 
                                            {item.secondTitle}
                                    </SubTitle>
                                    <Text className={""}>{item.description}</Text>
                                </div>
                                <div className="relative order-1 w-full aspect-video">
                                    <Image src={item.image.url}
                                        alt={item.firstTitle + " " + item.secondTitle}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </FadeInY>
                    </div>
                ))}
            </PageContainer>
            <div className="max-w-4xl mx-auto h-[50vh] px-6 my-28">
                <ExpoSlider images={images}/>
            </div>
        </>
    )
}