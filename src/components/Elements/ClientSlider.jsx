import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/marpe.jpeg";
import ClientLogo02 from "../../assets/img/clients/Tawariq_logo.jpeg";

export default function ClientSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper id="clients">
      <div className="lightBg">
        <div className="container">
<HeaderInfo>
            <h1 className="font40 extraBold">Our Clients.</h1>
          </HeaderInfo>
    <Slider {...settings}>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo01} alt="client logo" style={{ width: '150px', height: '150px' }}/>
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo02} alt="client logo" />
      </LogoWrapper>
    </Slider>
    </div>
    </div>
    </Wrapper>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 150px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;