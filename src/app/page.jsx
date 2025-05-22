import PageWrapper from "./components/utils/PageTransition"
import Homepage from "./components/layout/HomepageLayout"
import HeroSlider from "./components/layout/components/Heroslider"

export const revalidate = 10

export default async function Home() {
  const fetchData = await fetch(`${process.env.PUBLIC_API_URL}/api/homepage?populate[carouselContainer][populate]=*&populate[introBlock][populate]=*&populate[serviceBlock][populate]=*&populate[partners][populate]=*&populate[services][populate]=*`)
  const { data } = await fetchData.json()
  
  return (
    <PageWrapper>
      <HeroSlider data={data.carouselContainer} />
      <Homepage data={data} />
    </PageWrapper>
  );
}
