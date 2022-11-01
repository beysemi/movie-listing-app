import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section, HeroTitle, HeroText } from "./style";
import SearchBar from '../SearchBar'


const Hero = ({title, text, searchbar = true}) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="mx-auto">
            <HeroTitle>{title}</HeroTitle>
            <HeroText>
              {text}
            </HeroText>
            {searchbar && <SearchBar/>}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
