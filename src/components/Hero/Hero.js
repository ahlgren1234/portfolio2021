import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Digital Garden
      </SectionTitle>
      <SectionText>
        My name is Peter Ahlgren, and I'm a fullstack developer.<br />
        I have 20 years of experience in programming and development.< br />
        Through out the years I have been working with companies like Disney, Warner Bros, Swedish Cancer & Allergy Fund, Lexicon and many more.
      </SectionText>
      <Button onClick={ () => window.location = 'mailto:peter@peterahlgren.com' }>
        Lets talk!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;