import { FormEvent, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useSummaryCart } from "../context/SummaryCartContext";
import { useNavigate } from "react-router-dom";

function SubscriberDetails() {
  const {onAddPlan } = useSummaryCart();
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("Surname");
  const [phoneValue, setPhoneValue] = useState("666-666-666");
  const [emailValue, setEmailValue] = useState("123@example.gmail");
  const [streetValue, setStreetValue] = useState("Park Terrace");
  const [houseNumberValue, setHouseNumberValue] = useState<string | number>(
    "50"
  );
  const [cityValue, setCityValue] = useState("Aberdeen");
  const [zipValue, setZipValue] = useState("AB10");

  const navigate = useNavigate();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onAddPlan(nameValue)
    navigate("..");
  }
  return (
    <Container className="mt-5">
      <h1 className="text-center">Your Details</h1>
      <hr />
      <Form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <h3 className="mt-4">Personal Info</h3>

        <FormGroup>
          <FormLabel className="fw-bold">Name</FormLabel>
          <FormControl
            required
            autoFocus
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">Surname</FormLabel>
          <FormControl
            required
            value={surnameValue}
            onChange={(e) => setSurnameValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">Phone</FormLabel>
          <FormControl
            placeholder="000-000-000"
            required
            type="tel"
            value={phoneValue}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            onChange={(e) => setPhoneValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">Email</FormLabel>
          <FormControl
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <h3 className="mt-4">Address</h3>
        <FormGroup>
          <FormLabel className="fw-bold">Street</FormLabel>
          <FormControl
            required
            value={streetValue}
            onChange={(e) => setStreetValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">House Number</FormLabel>
          <FormControl
            required
            value={houseNumberValue}
            onChange={(e) => setHouseNumberValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">City</FormLabel>
          <FormControl
            required
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fw-bold">Zip</FormLabel>
          <FormControl
            required
            value={zipValue}
            onChange={(e) => setZipValue(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button onSubmit={handleSubmit} className="mt-4 w-50" type="submit">
          Subscribe
        </Button>
      </Form>
    </Container>
  );
}

export default SubscriberDetails;
