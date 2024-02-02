import { Button, Modal, Stack } from "react-bootstrap";
import { useSummaryCart } from "../../context/SummaryCartContext";

function ChoosePlanModal() {
  const {
    isOpenChoosePlanModal,
    closeChoosePlanModal,
    openCart,
    setSelectedDeviceId,
  } = useSummaryCart();
  return (
    <Modal
      show={isOpenChoosePlanModal}
      onHide={() => {
        closeChoosePlanModal();
        setSelectedDeviceId(undefined);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Choose Your Broadband</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={2}>
          <Button
            variant="outline-primary"
            onClick={() => {
              openCart(1);
              closeChoosePlanModal();
            }}
          >
            BASIC
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              openCart(2);
              closeChoosePlanModal();
            }}
          >
            PRO
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              openCart(3);
              closeChoosePlanModal();
            }}
          >
            ENTERPRISE
          </Button>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}

export default ChoosePlanModal;
