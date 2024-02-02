import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import ReactSelect from "react-select";

type SmartphoneProps = {
  imgs: string[];
  name: string;
  colors: string[];
};

function SmartphoneCart({ imgs, name, colors }: SmartphoneProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(0);
  }, [name]);
  return (
    <>
      <Stack
        gap={2}
        direction="horizontal"
        className="align-items-start mb-2 border border-seccondary p-2"
      >
        <img
          style={{ objectFit: "cover", width: "40%" }}
          src={imgs[currentIndex]}
        />
        <div className="d-flex gap-1 flex-column">
          <h6>{name}</h6>
          <span>Color: {colors[currentIndex]}</span>
          <ReactSelect
            placeholder="Choose Color"
            value={{ label: colors[currentIndex], value: currentIndex }}
            options={colors.map((color, idx) => {
              return { label: color, value: idx };
            })}
            onChange={(e) => setCurrentIndex(e!.value)}
          />
        </div>
      </Stack>
    </>
  );
}

export default SmartphoneCart;
