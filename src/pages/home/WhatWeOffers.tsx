// bootstrap components
import { Card, Col, Row } from "react-bootstrap";

// react icons
import { MdLtePlusMobiledata } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

function WhatWeOffers() {
  return (
    <>
      <div className="text-center mb-4 mt-5">
        <h3 className="text-primary">Our Services</h3>
        <h2>What We Offers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          laboriosam corrupti culpa debitis harum soluta?
        </p>
      </div>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Col className="mb-4">
          <Card className="p-2 text-center h-100">
            <MdLtePlusMobiledata size={40} style={{ margin: "1rem auto" }} />

            <Card.Title>High Quality Connection</Card.Title>
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              eligendi?
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="p-2 text-center">
            <FaMobile size={40} style={{ margin: "1rem auto" }} />

            <Card.Title>Large Selection Of Devices</Card.Title>
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              eligendi?
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="p-2 text-center">
            <MdAppSettingsAlt size={40} style={{ margin: "1rem auto" }} />

            <Card.Title>Service</Card.Title>
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              eligendi?
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="p-2 text-center">
            <MdOutlineSupportAgent size={40} style={{ margin: "1rem auto" }} />

            <Card.Title>Support 24/7</Card.Title>
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              eligendi?
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default WhatWeOffers;
