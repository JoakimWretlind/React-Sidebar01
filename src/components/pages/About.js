import styled from 'styled-components';
import { PageSection, PageH1 } from '../styling';

const Section = styled.section`
    ${PageSection};
    background: #006172;
`

const Header = styled.h1`
    ${PageH1};
    color: #fff;
`

const About = () => {
    return (
        <Section>
            <Header>About</Header>
        </Section>
    )
}

export default About
