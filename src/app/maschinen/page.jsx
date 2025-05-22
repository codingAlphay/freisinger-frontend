import PageWrapper from "../components/utils/PageTransition";
import { Container } from "../components/utils/Container"
import { Title, SubTitle, Text} from "../components/utils/Text";

export default function Home() {
  return (
    <PageWrapper>        
        <div className="h-[200vh]">
        <Container className={"pt-48"}>
            <Title className={"text-7xl font-bold text-primary"}>
              Maschinenpark
            </Title>
        </Container>
        </div>
    </PageWrapper>
  );
}
