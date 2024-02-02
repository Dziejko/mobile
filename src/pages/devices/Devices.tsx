// local data
import smartphones from "../../data/smartphones.json";

// react hooks
import { useMemo, useState } from "react";

// components
import SmartphoneList from "./SmartphoneList";

// bootstrap components
import { Container } from "react-bootstrap";
import Filters from "./Filters";


export type SortingValueProps = {
  label: string;
  value: number;
};

function Devices() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortingValue, setSortingValue] = useState<SortingValueProps | undefined>();

  const filteredPhones = useMemo(() => {
    if (selectedOptions.length == 0 && searchValue == "") {
      return smartphones.devices;
    } else {
      return smartphones.devices.filter((device) => {
        const allOptions = device.colors + device.brand;

        if (
          selectedOptions.every((option) => allOptions.includes(option)) &&
          device.name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return device;
        }
      });
    }
  }, [selectedOptions, smartphones, searchValue]);

  const sortedPhones = useMemo(() => {
    if (!sortingValue) {
      return filteredPhones.sort((a, b) => a.id - b.id);
    }
    if (sortingValue.label === "Ascending") {
      return filteredPhones.sort((a, b) => a.price - b.price);
    } else if (sortingValue.label === "Descending") {
      return filteredPhones.sort((a, b) => b.price - a.price);
    } else {
      return filteredPhones;
    }
  }, [sortingValue, filteredPhones]);

  const filters = useMemo(() => {
    return smartphones.brands.concat(smartphones.colors);
  }, [smartphones]);

  function onClear() {
    setSelectedOptions([]);
    setSearchValue("");
    setSortingValue(undefined);
  }

  function setSelected(value: string) {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  }

  return (
    <Container className="mt-5" style={{ minHeight: "100vh" }}>
      <Filters
        onClear={onClear}
        filters={filters}
        selectedOptions={selectedOptions}
        setSelected={setSelected}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      sortingValue={sortingValue}
      setSortingValue={setSortingValue}
      />
      <SmartphoneList phones={sortedPhones} />
    </Container>
  );
}

export default Devices;
