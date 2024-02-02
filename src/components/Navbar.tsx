import {
  Container,
  Nav,
  NavbarBrand,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdOutlineSmartphone } from "react-icons/md";
import { SiTmobile } from "react-icons/si";
import { useCompare } from "../context/CompareContext";
import { FaHome } from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import MyPlansDropdown from "./MyPlansDropdown";
import { useState } from "react";
import { useSummaryCart } from "../context/SummaryCartContext";

function Navbar() {
  const { openCompareModal } = useCompare();
  const {exclamationMark,hideExclamationMark}=useSummaryCart()
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <NavbarBs
        expand="md"
        sticky="top"
        className="fw-bold fs-5 shadow bg-white"
      >
        <Container>
          <NavbarBrand>
            <SiTmobile size={30} />
          </NavbarBrand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBs.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="d-flex align-items-center gap-1"
                to="/"
                as={NavLink}
              >
                <FaHome size={23} style={{ transform: "translate(0,6%)" }} />
                Homepage
              </Nav.Link>
              <Nav.Link
                className="d-flex align-items-center gap-1"
                to="/devices"
                as={NavLink}
              >
                <MdOutlineSmartphone style={{ transform: "translate(0,8%)" }} />
                Devices
              </Nav.Link>

              <button
                onClick={() => openCompareModal()}
                type="button"
                className="d-flex align-items-center gap-1 nav-link"
              >
                <MdCompare style={{ transform: "translate(0,10%)" }} />
                Compare Devices
              </button>
              <button
                onClick={() => {
                  setIsVisible(!isVisible)
                  hideExclamationMark()
                }}
                onMouseLeave={() => setIsVisible(false)}
                type="button"
                className="d-flex align-items-center gap-1 nav-link"
                style={{ position: "relative" }}
              >
                <FaSuitcase style={{ transform: "translate(0,10%)" }} />
                My Broadbands
                {exclamationMark&&<div className="exclamation-mark text-danger fw-bold">!</div>}
                <MyPlansDropdown isVisible={isVisible} />
              </button>
            </Nav>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
