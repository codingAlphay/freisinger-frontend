import PageWrapper from "../components/full/PageTransition";
import { Container } from "../components/layout/utils/Container"
import { Title, SubTitle, Text} from "../components/layout/utils/Text";

export default function Home() {
  return (
    <PageWrapper>        
        <div className="h-[200vh]">
        <Container className={"pt-48"}>
            <Title className={"text-7xl font-bold text-primary"}>
            Galerie
            </Title>
        </Container>
        </div>
    </PageWrapper>
  );
}
