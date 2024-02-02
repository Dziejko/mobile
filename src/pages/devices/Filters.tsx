import { Stack } from "react-bootstrap";
import CheckboxFilters from "./CheckboxFilters";
import ClearFiltersBtn from "./ClearFiltersBtn";
import SearchFilter from "./SearchFilter";
import SortFilter from "./SortFilter";
import { SortingValueProps } from "./Devices";

export type FiltersProps = {
  onClear(): void;
  filters: string[];
  selectedOptions: string[];
  setSelected(value: string): void;
  searchValue: string;
  setSearchValue(text: string): void;
  sortingValue: SortingValueProps | undefined ;
  setSortingValue({ label, value }: SortingValueProps): void;
};

function Filters({
  onClear,
  filters,
  selectedOptions,
  setSelected,
  searchValue,
  setSearchValue,
  sortingValue,
  setSortingValue,
}: FiltersProps) {
  return (
    <>
      <h2>Filters</h2>
      <Stack direction="horizontal" gap={2} className="mb-3 fs-5">
        <CheckboxFilters
          filters={filters}
          selectedOptions={selectedOptions}
          setSelected={setSelected}
        />
        <ClearFiltersBtn onClear={onClear} />
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <SearchFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SortFilter
          sortingValue={sortingValue}
          setSortingValue={setSortingValue}
        />
      </Stack>
      <hr />
    </>
  );
}

export default Filters;
