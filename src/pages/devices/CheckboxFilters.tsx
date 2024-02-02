import { Stack } from "react-bootstrap"

type ChekboxFiltersProps={
    filters:string[]
    selectedOptions:string[]
    setSelected(value: string): void;
}


function CheckboxFilters({filters,selectedOptions,setSelected}:ChekboxFiltersProps) {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
    {filters.map((filter, idx) => (
      <div key={idx} className="d-flex gap-1 border p-1">
        <input
          checked={selectedOptions.includes(filter)}
          style={{ cursor: "pointer" }}
          type="checkbox"
          onChange={() => setSelected(filter)}
        ></input>
        <span style={{ translate: "0 -8%" }}>{filter}</span>
      </div>
    ))}
  </Stack>
  )
}

export default CheckboxFilters