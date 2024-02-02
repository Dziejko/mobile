import { Button, Card, ListGroup, ListGroupItem, Stack } from "react-bootstrap";
import { formatCurrency } from "../../utilites/formatCurrency";
import { useState } from "react";
import { useSummaryCart } from "../../context/SummaryCartContext";
import ReactCardFlip from "react-card-flip";
import { useCompare } from "../../context/CompareContext";

type SmartphoneSpecsProps = {
  is5g: boolean;
  capacity: number;
  battery: number;
  procesor: number;
  camera: number;
  size: number;
};

export type SmartphoneProps = {
  id: number;
  imgs: string[];
  name: string;
  price: number;
  colors?: string[];
  specifications: SmartphoneSpecsProps;
};

function Smartphone({
  id,
  imgs,
  name,
  price,
  colors,
  specifications,
}: SmartphoneProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const { openChoosePlanModal } = useSummaryCart();
  const { openCompareModal } = useCompare();

  return (
    <Card
      onMouseLeave={() => setIsFlipped(false)}
      className="p-3"
      style={{
        border: "1px solid #d3d3d8",
        width: "300px",
        minHeight: "495px",
        margin: "1rem auto",
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card.Img
          onMouseEnter={() => setIsFlipped(true)}
          style={{
            objectFit: "scale-down",
            height: "260px",
            marginBottom: "0.5rem",
          }}
          src={imgs[currentIndex]}
        />

        <div
          onMouseLeave={() => setIsFlipped(false)}
          style={{ height: "260px", marginBottom: "0.5rem" }}
        >
          <ListGroup>
            {specifications.is5g && <ListGroupItem>5G</ListGroupItem>}
            <ListGroupItem>
              Capacity: {specifications.capacity} GB
            </ListGroupItem>
            <ListGroupItem>Battery: {specifications.battery} mAh</ListGroupItem>
            <ListGroupItem>
              Procesor: {specifications.capacity} GHz
            </ListGroupItem>
            <ListGroupItem>Camera: {specifications.camera} MP</ListGroupItem>
            <ListGroupItem>Size: {specifications.size}"</ListGroupItem>
          </ListGroup>
        </div>
      </ReactCardFlip>

      <Stack
        direction="horizontal"
        gap={1}
        className="justify-content-center mb-1"
      >
        {colors &&
          colors.map((color, index) => (
            <button
              key={index}
              onClick={() => {
                if (currentIndex !== index) {
                  setCurrentIndex(index);
                }
              }}
              className={currentIndex === index ? "active" : ""}
              style={{
                background: color,
                height: "15px",
                width: "15px",
                border: "1px solid #777",
                borderRadius: "50%",
              }}
            ></button>
          ))}
      </Stack>

      <span className="mb-auto">{name}</span>

      <Stack className="mt-1 justify-content-end" gap={2}>
        <span className="fw-bold text-end fs-5">{formatCurrency(price)}</span>
        <Button onClick={() => openCompareModal(id)} variant="outline-primary">
          Compare
        </Button>
        <Button onClick={() => openChoosePlanModal(id)} variant="primary">
          Get With Broadband
        </Button>
      </Stack>
    </Card>
  );
}

export default Smartphone;
