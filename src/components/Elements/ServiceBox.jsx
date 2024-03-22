import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/img/user-interface.png";
import MonitorIcon from "../../assets/img/ux.png";
import BrowserIcon from "../../assets/img/consultant.png";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src={RollerIcon} alt="service icon" style={{ width: '150px', height: '150px' }}/>;
      break;
    case "monitor":
      getIcon =<img src={MonitorIcon} alt="service icon" style={{ width: '150px', height: '150px' }}/>;
      break;
    case "browser":
      getIcon = <img src={BrowserIcon} alt="service icon" style={{ width: '150px', height: '150px' }}/>;
      break;

    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;