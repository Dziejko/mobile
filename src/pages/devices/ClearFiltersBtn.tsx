import { Button } from "react-bootstrap";
import { FiltersProps } from "./Filters";



function ClearFiltersBtn({ onClear }: Partial<FiltersProps>) {
  return (
    <Button
      onClick={onClear}
      className="ms-auto fw-bold d-flex gap-1 align-items-center align-self-start"
      variant="outline-danger"
    >
      <span>Clear</span>
      <span className="fs-5">&times;</span>
    </Button>
  );
}

export default ClearFiltersBtn;
