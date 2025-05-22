import PageWrapper from "src/app/components/utils/PageTransition"
import ServiceLayout from "src/app/components/layout/ServiceLayout"

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch(`${process.env.PUBLIC_API_URL}/api/services?fields[0]=serviceName`)
  const { data } = await res.json()

  return data.map(svc => ({
    serviceName: svc.serviceName,
  }))
}

export default async function ServicePage({ params }) {
  const { serviceName } = await params

  const res = await fetch(`${process.env.PUBLIC_API_URL}/api/services?filters[serviceName][$eq]=${serviceName}&populate[infoBlock][populate]=*&populate[imageSlider][populate]=*&populate[mainImage][populate]=*`)

  const { data } = await res.json()
  const service = data[0]

  return (
    <PageWrapper>
      <ServiceLayout data={service} />
    </PageWrapper>
  )
}