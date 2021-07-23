import styled from 'styled-components';
import { PageSection, PageH1 } from '../styling';

const Section = styled.section`
    ${PageSection};
    background: #9F0049;
`

const Header = styled.h1`
    ${PageH1};
    color: #fff;
`

const Home = () => {
    return (
        <Section>
            <Header>Home</Header>
        </Section>
    )
}

export default Home
