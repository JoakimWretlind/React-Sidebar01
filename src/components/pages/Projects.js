import styled from 'styled-components';
import { PageSection, PageH1 } from '../styling';

const Section = styled.section`
    ${PageSection};
    background: #ED9B04;
`

const Header = styled.h1`
    ${PageH1};
    color: #fff;
`


const Projects = () => {
    return (
        <Section>
            <Header>Projects</Header>
        </Section>
    )
}

export default Projects
