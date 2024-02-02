import { ReactNode, createContext, useContext, useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import SummaryCart from "../components/cart/SummaryCart";
import ChoosePlanModal from "../components/modals/ChoosePlanModal";
import smartphones from "../data/smartphones.json";
import Notification from "../components/Notification";
import { useLocalStorage } from "../hooks/useLocalStorage";
type SummaryCartProviderProps = {
  children: ReactNode;
};

type SummaryCartContext = {
  isOpenSummaryCart: boolean;
  openCart(plan: number): void;
  closeCart(): void;

  isOpenChoosePlanModal: boolean;
  openChoosePlanModal(id: number): void;
  closeChoosePlanModal(): void;

  chosenPlan: number;
  selectedDeviceId: number | undefined;
  setSelectedDeviceId(id: number | undefined): void;

  isOpenNotification: boolean;
  closeNotification(): void;
  openNotification(username: string): void;
 
  plans:Plan[]
  onAddPlan(username:string):void

  exclamationMark:boolean
  hideExclamationMark():void
};
type Device = {
  id: number;
  name: string;
  price: number;
};
type Plan = {
  plan: number;
  device?: Device;
};

const SummaryCartContext = createContext({} as SummaryCartContext);

export function useSummaryCart() {
  return useContext(SummaryCartContext);
}

export function SummaryCartProvider({ children }: SummaryCartProviderProps) {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [username, setUsername] = useState("");
  const [plans, setPlans] = useLocalStorage<Plan[]>("PLANS", []);
  const [exclamationMark, setExclamationMark]=useState(false)

  const [isOpenSummaryCart, setIsOpenSummaryCart] = useState(false);
  const [isOpenChoosePlanModal, setIsOpenChoosePlanModal] = useState(false);
  const [chosenPlan, setChosenPlan] = useState(0);
  const [selectedDeviceId, setSelectedDeviceId] = useState<
    number | undefined
  >();
  const onAddPlan = (username:string) => {
    setPlans((prevPlans) => {
      if(selectedDeviceId){
        const device=smartphones.devices.find(device=>device.id===selectedDeviceId)
        if(device){
          return [...prevPlans,{plan:chosenPlan,device:{id:device.id,name:device.name,price:device.price}}];
        }
        return prevPlans
      }else{
        return [...prevPlans,{plan:1}]
      }
      
    });
    setSelectedDeviceId(undefined)
    setChosenPlan(0)
    openNotification(username)
    setExclamationMark(true)
  };
  const hideExclamationMark=()=>{
    setExclamationMark(false)
  }

  const openCart = (plan: number) => {
    setIsOpenSummaryCart(true);
    setChosenPlan(plan);
  };
  const closeCart = () => {
    setIsOpenSummaryCart(false);
    setTimeout(() => {
      setChosenPlan(0);
    }, 500);
  };
  const openChoosePlanModal = (id: number) => {
    const item = smartphones.devices.find((device) => device.id == id);
    if (item) {
      setIsOpenChoosePlanModal(true);
      setSelectedDeviceId(id);
    }
  };
  const closeChoosePlanModal = () => {
    setIsOpenChoosePlanModal(false);
  };

  const openNotification = (username: string) => {
    setUsername(username);
    setIsOpenNotification(true);
  };
  const closeNotification = () => {
    setIsOpenNotification(false);
    setTimeout(() => {
      setUsername("");
    }, 1000);
  };
  return (
    <SummaryCartContext.Provider
      value={{
        isOpenSummaryCart,
        isOpenChoosePlanModal,
        closeCart,
        openCart,
        chosenPlan,
        openChoosePlanModal,
        closeChoosePlanModal,
        selectedDeviceId,
        isOpenNotification,
        closeNotification,
        openNotification,
        setSelectedDeviceId,
        plans,
        onAddPlan,
        exclamationMark,
        hideExclamationMark
      }}
    >
      {children}
      <Notification username={username} />
      <SummaryCart />
      <ChoosePlanModal />
    </SummaryCartContext.Provider>
  );
}
