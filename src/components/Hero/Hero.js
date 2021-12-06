import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        <strong>My Personal Portfolio </strong>
      </SectionTitle>
      <SectionText>
        I design and code beautifully simple things with react, and I love what
        I do. Also, a UI/UX designer. I also understand the use of smart
        contract and how to incorporate it in my front-end.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://mail.google.com/mail/?view=cm&source=mailto&to=[remiabduls@gmail.com]")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
