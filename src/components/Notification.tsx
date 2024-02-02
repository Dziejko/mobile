import { Toast, ToastBody, ToastHeader } from "react-bootstrap";
import { useSummaryCart } from "../context/SummaryCartContext";

type NotificationProps = {
  username: string;
};

function Notification({ username }: NotificationProps) {
  const { isOpenNotification, closeNotification } = useSummaryCart();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        maxWidth: "250px",
      }}
    >
      <Toast
        bg="primary"
        color="white"
        delay={10000}
        autohide
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        show={isOpenNotification}
        onClose={() => closeNotification()}
      >
        <ToastHeader className="w-100">
          <span className="me-auto fw-bold">Hi!</span>
        </ToastHeader>
        <ToastBody className="text-white">
          Thank you {username} for subscribing us!
        </ToastBody>
      </Toast>
    </div>
  );
}

export default Notification;
