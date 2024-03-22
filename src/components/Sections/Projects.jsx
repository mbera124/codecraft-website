import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import ProjectImg1 from "../../assets/img/wholesale.PNG";
import ProjectImg2 from "../../assets/img/moriah1.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Wholesale Management System"
                text="Revolutionize your wholesale operations with our comprehensive Wholesale Management System.
                 Seamlessly manage inventory, streamline ordering processes, 
                 and optimize supply chain logistics—all from one centralized platform.
                  Empower your business with real-time insights, enhanced efficiency, 
                  and unparalleled control, ensuring smoother operations and greater profitability.
                   Experience the future of wholesale management with us"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Online Food delivery application"
                text="Indulge in the convenience of our Online Food Delivery Application.
                 From gourmet delights to everyday favorites, satisfy your cravings with just a few taps.
                  Enjoy seamless ordering, timely deliveries, and a wide range of cuisines right at your fingertips.
                   Experience the ultimate dining experience, wherever you are, with our intuitive and user-friendly app.
                    Order now and let the flavors come to you."
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

