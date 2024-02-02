import { Col, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";
import { useCompare } from "../../context/CompareContext";
import ReactSelect from "react-select";
import smartphones from "../../data/smartphones.json";
import { useEffect, useMemo, useState } from "react";
import { SelectedDeviceProps } from "../cart/SummaryCart";
import { getCompareResult } from "../../utilites/getCompareResult";

function CompareModal() {
  const { isOpen, closeCompareModal, selectedDeviceId } = useCompare();

  const [selectedDevice1, setSelectedDevice1] =
    useState<SelectedDeviceProps | null>();
  const [selectedDevice2, setSelectedDevice2] =
    useState<SelectedDeviceProps | null>();
    
  useEffect(() => {
    if (selectedDeviceId) {
      const device = smartphones.devices.find(
        (device) => device.id === selectedDeviceId
      );
      if (device) setSelectedDevice1({ label: device.name, value: device.id });
    }
  }, [selectedDeviceId]);

  const device1spec = useMemo(() => {
    const device = smartphones.devices.find(
      (device) => device.id === selectedDevice1?.value
    );
    if (device) {
      return device.specifications;
    }
  }, [selectedDevice1]);

  const device2spec = useMemo(() => {
    const device = smartphones.devices.find(
      (item) => item.id === selectedDevice2?.value
    );
    if (device) {
      return device.specifications;
    }
  }, [selectedDevice2]);

  return (
    <Modal
      show={isOpen}
      onHide={() => {
        closeCompareModal();
        setSelectedDevice1(null);
        setSelectedDevice2(null);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Compare Devices</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ReactSelect
              value={selectedDevice1}
              options={smartphones.devices.map((device) => {
                return { label: device.name, value: device.id };
              })}
              onChange={(e) =>
                setSelectedDevice1({ label: e!.label, value: e!.value })
              }
            />
            {device1spec && (
              <ListGroup className="mt-3 gap-2 fw-bold ">
                <ListGroupItem
                  className={
                    device2spec &&
                    getCompareResult(device1spec.is5g, device2spec.is5g)
                  }
                >
                  5G: <span> {device1spec.is5g ? "Yes" : "No"}</span>
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device2spec &&
                    getCompareResult(device1spec.capacity, device2spec.capacity)
                  }
                >
                  Capacity: <span> {device1spec.capacity} </span> GB
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device2spec &&
                    getCompareResult(device1spec.battery, device2spec.battery)
                  }
                >
                  Battery: <span> {device1spec.battery}</span> mAh
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device2spec &&
                    getCompareResult(device1spec.procesor, device2spec.procesor)
                  }
                >
                  Procesor: <span> {device1spec.procesor}</span> GHz
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device2spec &&
                    getCompareResult(device1spec.camera, device2spec.camera)
                  }
                >
                  Camera: <span>{device1spec.camera}</span> MP
                </ListGroupItem>
                <ListGroupItem>
                  Size: <span>{device1spec.size}</span>"
                </ListGroupItem>
              </ListGroup>
            )}
          </Col>

          <Col>
            <ReactSelect
              value={selectedDevice2}
              options={smartphones.devices.map((device) => {
                return { label: device.name, value: device.id };
              })}
              onChange={(e) =>
                setSelectedDevice2({ label: e!.label, value: e!.value })
              }
            />
            {device2spec && (
              <ListGroup className="mt-3 gap-2 fw-bold ">
                <ListGroupItem
                  className={
                    device1spec &&
                    getCompareResult(device2spec.is5g, device1spec.is5g)
                  }
                >
                  5G: <span> {device2spec.is5g ? "Yes" : "No"}</span>
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device1spec &&
                    getCompareResult(device2spec.capacity, device1spec.capacity)
                  }
                >
                  Capacity: <span> {device2spec.capacity} </span> GB
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device1spec &&
                    getCompareResult(device2spec.battery, device1spec.battery)
                  }
                >
                  Battery: <span> {device2spec.battery}</span> mAh
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device1spec &&
                    getCompareResult(device2spec.procesor, device1spec.procesor)
                  }
                >
                  Procesor: <span> {device2spec.procesor}</span> GHz
                </ListGroupItem>
                <ListGroupItem
                  className={
                    device1spec &&
                    getCompareResult(device2spec.camera, device1spec.camera)
                  }
                >
                  Camera: <span>{device2spec.camera}</span> MP
                </ListGroupItem>
                <ListGroupItem>
                  Size: <span>{device2spec.size}</span>"
                </ListGroupItem>
              </ListGroup>
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default CompareModal;
