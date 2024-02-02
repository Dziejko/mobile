import { Col, Row } from "react-bootstrap";
import Smartphone, { SmartphoneProps } from "./Smartphone";

type SmartphoneListProps = {
  phones: SmartphoneProps[];
  title?: string;
};

function SmartphoneList({ phones, title }: SmartphoneListProps) {
  return (
    <>
      {title && <h2 className="m-5 fw-bold text-center">{title}</h2>}

      <Row xxl={4}>
        {phones.map((smartphone) => (
          <Col key={smartphone.id}>
            <Smartphone
              specifications={smartphone.specifications}
              id={smartphone.id}
              imgs={smartphone.imgs}
              name={smartphone.name}
              price={smartphone.price}
              colors={smartphone.colors}
            />
          </Col>
        ))}
      </Row>
      {title && <hr className="mt-5" />}
    </>
  );
}

export default SmartphoneList;
