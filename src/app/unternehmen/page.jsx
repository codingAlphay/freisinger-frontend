import PageWrapper from "../components/utils/PageTransition"
import CompanyContent from '../components/layout/CompanyLayout'

export default async function Company() {
  
  const fetchData = await fetch(`${process.env.PUBLIC_API_URL}/api/company?populate[personaBlock][populate]=*&populate[milestoneContainer][populate]=*`)
  const { data } = await fetchData.json()

  return (
    <PageWrapper>
        <CompanyContent data={data} />
    </PageWrapper>
  )
}
