import PageWrapper from "../components/utils/PageTransition"
import CompanyContent from '../components/layout/CompanyLayout'

export default async function Company() {

  
  const fetchData = await fetch('http://localhost:1337/api/company?populate[personaBlock][populate]=*&populate[milestoneContainer][populate]=*')
  const { data } = await fetchData.json()

  return (
    <PageWrapper>
        <CompanyContent data={data} />
    </PageWrapper>
  )
}
