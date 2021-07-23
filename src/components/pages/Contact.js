import styled from 'styled-components';
import { PageSection, PageH1 } from '../styling';

const Section = styled.section`
    ${PageSection};
    background: #3B7A25;
`

const Header = styled.h1`
    ${PageH1};
    color: #fff;
`


const Contact = () => {
    return (
        <Section>
            <Header>Contact</Header>
        </Section>
    )
}

export default Contact
