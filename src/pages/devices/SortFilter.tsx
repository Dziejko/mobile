import ReactSelect from "react-select";
import { SortingValueProps } from "./Devices";

const options = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
];
type SortFilterProps = {
  sortingValue: SortingValueProps | undefined;
  setSortingValue({ label, value }: SortingValueProps): void;
};

function SortFilter({ sortingValue, setSortingValue }: SortFilterProps) {
  return (
    <div className="ms-auto" style={{ minWidth: "150px" }}>
      <ReactSelect
        value={sortingValue}
        onChange={(e) => setSortingValue({ label: e!.label, value: e!.value })}
        options={options}
        placeholder="Sort by price"
      />
    </div>
  );
}

export default SortFilter;
