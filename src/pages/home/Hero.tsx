// local data
import SmartphoneBg from "/smartphone.webp";

// Props
import { BroadbandsProps } from "./Broadbands";

// bootstrap components
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

// react icons
import { FaCheck } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Hero({ broadbandsRef }: BroadbandsProps) {
  return (
    <div className="p-3" style={{ background: "#f6f6f6" }}>
      <Container>
        <Row>
          <Col className="col-lg-7">
            <Stack>
              <h1 className="h1-top-home-page">
                Check the services from our internet provider!
              </h1>
              <hr />
              <h3>Benefits</h3>
              <ul style={{ listStyle: "none", paddingLeft: "5px" }}>
                <li className="d-flex align-items-center gap-2 flex-wrap">
                  <span>
                    <FaCheck /> 5G
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 flex-wrap">
                  <span>
                    <FaCheck /> Up to 1000 MBps
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 flex-wrap">
                  <span>
                    <FaCheck /> Free 50GB data at the first contract
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 flex-wrap ">
                  <span>
                    <FaCheck /> Termination of the contract without additional
                    costs
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 flex-wrap">
                  <span>
                    <FaCheck /> Discounts for regular subscribers
                  </span>
                </li>
              </ul>
              <h4>And much more...</h4>
              <div
                style={{ maxWidth: "270px" }}
                className="ms-auto d-flex align-items-center gap-1 top-home-page-btn"
              >
                <FaLongArrowAltRight className="arrow-left" size={25} />
                <Button
                  variant="dark"
                  onClick={() => {
                    if (broadbandsRef.current) {
                      window.scrollTo({
                        top: broadbandsRef.current["offsetTop"],
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Check Our Broadbands
                </Button>
                <FaLongArrowAltLeft className="arrow-right" size={25} />
              </div>
            </Stack>
          </Col>
          <Col className="col-lg-5 top-img">
            <img src={SmartphoneBg} width="100%"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
