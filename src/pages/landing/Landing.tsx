import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Testi from "../../components/testi/Testi";
import Prodcaro from "../../components/carousel/Prodcaro";
import Contact from "../../components/contact/Contact";
import Cta from "../../components/footer/Cta";

function Landing() {
  return (
    <div>
      <Container style={{ textAlign: "center", padding: "0px" }} fluid="true">
        <Hero />
        <Services />
        <Testi />
        <Prodcaro />
        <Contact />
        <Cta />
      </Container>
    </div>
  );
}

export default Landing;
