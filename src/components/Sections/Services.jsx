import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
export default function Services() {
  return (
    <Wrapper id="services">

      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Mobile App Development"
                subtitle="Embark on a journey of innovation with our expert mobile app development services.
                 From concept to launch, we're your trusted partner in crafting seamless mobile experiences that captivate audiences and drive business success.
                 Let us bring your vision to life and unlock new possibilities in the mobile landscape."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web App Development"
                subtitle="We offer transformative web development services crafted to redefine your digital presence and drive sustainable growth. 
                From meticulous planning to flawless execution,we're dedicated to delivering bespoke web solutions that resonate with your audience and propel your business forward."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="IT Consultancy"
                subtitle="We offer unparalleled IT consultancy services designed to elevate your business strategy and streamline your operations. 
                From comprehensive assessments to strategic roadmaps, we empower you to harness the full potential of technology, 
                driving growth and innovation at every step."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;