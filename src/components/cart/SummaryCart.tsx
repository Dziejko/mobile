import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useSummaryCart } from "../../context/SummaryCartContext";
import { formatCurrency } from "../../utilites/formatCurrency";
import ReactSelect from "react-select";
import smartphones from "../../data/smartphones.json";
import { useEffect, useMemo, useState } from "react";
import SmartphoneCart from "./SmartphoneCart";
import { getFinalPrice } from "../../utilites/getFinalPrice";
import { Link } from "react-router-dom";

export type SelectedDeviceProps = {
  value: number;
  label: string;
};

function SummaryCart() {
  const {
    closeCart,
    isOpenSummaryCart,
    chosenPlan,
    selectedDeviceId,
    setSelectedDeviceId,
  } = useSummaryCart();

  const [selectedDevice, setSelectedDevice] =
    useState<SelectedDeviceProps | null>();

  useEffect(() => {
    if (selectedDeviceId) {
      const device = smartphones.devices.find(
        (device) => device.id === selectedDeviceId
      );
      if (device) {
        setSelectedDevice({ label: device.name, value: device.id });
      }
    }
  }, [selectedDeviceId]);

  function getPlanInfo(chosenPlan: number) {
    let title, connectionSpeed, price, data;
    if (chosenPlan === 1) {
      title = "Basic";
      connectionSpeed = "4G";
      price = 9.99;
      data = "10GB Data";
    } else if (chosenPlan === 2) {
      title = "Pro";
      connectionSpeed = "4G + LTE";
      price = 19.99;
      data = "30GB Data";
    } else {
      title = "Enterprise";
      connectionSpeed = "5G + LTE";
      price = 29.99;
      data = "Unlimited Data";
    }
    return {
      title: title,
      connectionSpeed: connectionSpeed,
      price: price,
      data: data,
    };
  }
  const info = getPlanInfo(chosenPlan);

  const device = useMemo(() => {
    return smartphones.devices.find(
      (device) => device.id === selectedDevice?.value
    );
  }, [selectedDevice, smartphones]);

  function onClose() {
    closeCart();
    setTimeout(() => {
      setSelectedDevice(null);
    }, 500);
  }
  return (
    <Offcanvas show={isOpenSummaryCart} onHide={()=>{
      setSelectedDeviceId(undefined)
      onClose()
    }} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-2">Summary</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack direction="vertical" gap={1} className="fs-5">
          <span>
            Broadband: <span className="fw-bold">{info.title}</span>
          </span>
          <span>
            Connection Speed:
            <span className="fw-bold">{info.connectionSpeed}</span>
          </span>
          <span>
            Data: <span className="fw-bold">{info.data}</span>
          </span>

          <span>
            Price: <span className="fw-bold">{formatCurrency(info.price)}</span>
            /<span className="opacity-50 fs-5">mo</span>
          </span>
        </Stack>
        <ReactSelect
          className="mb-4 mt-4"
          placeholder="Select Device"
          value={selectedDevice}
          options={smartphones.devices.map((device) => {
            return { label: device.name, value: device.id };
          })}
          onChange={(e) => {
            setSelectedDevice({ label: e!.label, value: e!.value });
            setSelectedDeviceId(e!.value);
          }}
        />
        {device && <SmartphoneCart {...device} />}
        <h4>
          Total:
          {!device
            ? formatCurrency(info.price)
            : formatCurrency(getFinalPrice(info.price, device.price))}
          /<span className="opacity-50 fs-5">mo</span>
        </h4>
        <Link to="/subscriber-details">
          <Button className="w-100 mt-2" onClick={onClose}>
            {device ? "Summary" : "Continue Without Device"}
          </Button>
        </Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SummaryCart;
