// local data
import recommended from "../../data/recommended.json";

// react hooks
import { useRef } from "react";

// components
import Hero from "./Hero";
import WhatWeOffers from "./WhatWeOffers";
import Broadbands from "./Broadbands";
import SmartphoneList from "../devices/SmartphoneList";

// bootstrap components/styling
import { Container } from "react-bootstrap";

function Home() {
  const broadbandsRef = useRef(null);

  return (
    <>
      <div className="p-3" style={{ background: "#f6f6f6" }}>
        <Hero broadbandsRef={broadbandsRef} />
      </div>
      <Container className="mb-5">
        <WhatWeOffers />
        <SmartphoneList title="RECOMMENDED" phones={recommended.devices} />
        <Broadbands broadbandsRef={broadbandsRef} />
      </Container>
    </>
  );
}

export default Home;
