import { ReactNode, createContext, useContext, useState } from "react";
import CompareModal from "../components/modals/CompareModal";

type CompareProviderProps = {
  children: ReactNode;
};

type CompareContext = {
  isOpen: boolean;
  openCompareModal(id?: number): void;
  closeCompareModal(): void;
  selectedDeviceId: number | undefined;
};

const CompareContext = createContext({} as CompareContext);

export function useCompare() {
  return useContext(CompareContext);
}

export function CompareProvider({ children }: CompareProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState<number>();

  const openCompareModal = (id?: number) => {
    if (id) {
      setSelectedDeviceId(id);
    }
    setIsOpen(true);
  };

  const closeCompareModal = () => {
    setIsOpen(false);
    setSelectedDeviceId(undefined);
  };

  return (
    <CompareContext.Provider
      value={{ isOpen, openCompareModal, closeCompareModal, selectedDeviceId }}
    >
      {children}
      <CompareModal />
    </CompareContext.Provider>
  );
}
