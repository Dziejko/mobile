import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSummaryCart } from "../context/SummaryCartContext";
import { getFinalPrice } from "../utilites/getFinalPrice";
import { formatCurrency } from "../utilites/formatCurrency";
import { useMemo } from "react";

type MyPlansDropdownProps = {
  isVisible: boolean;
};

function MyPlansDropdown({ isVisible }: MyPlansDropdownProps) {
  const { plans } = useSummaryCart();
  function getPlanTitle(chosenPlan: number) {
    let title;
    if (chosenPlan === 1) {
      title = "Basic";
    } else if (chosenPlan === 2) {
      title = "Pro";
    } else {
      title = "Enterprise";
    }
    return title;
  }
  function getPlanPrice(chosenPlan: number) {
    let price;
    if (chosenPlan === 1) {
      price = 9.99;
    } else if (chosenPlan === 2) {
      price = 19.99;
    } else {
      price = 29.99;
    }
    return price;
  }
  const totalPrice = useMemo(() => {
    const prices = plans.map((plan) => {
      if (plan.device) {
        return getFinalPrice(getPlanPrice(plan.plan), plan.device.price);
      }
      return getPlanPrice(plan.plan);
    });
    const initialValue = 0;
    const result = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return result;
  }, [plans]);
  return (
    <div
      className={
        isVisible
          ? "show-dropdown my-plans-dropdown "
          : "hide-dropdown my-plans-dropdown "
      }
    >
      {plans && (
        <>
          <ListGroup
            style={{ fontSize: "0.8rem", maxHeight: "250px", overflow: "auto" }}
          >
            {plans.map((plan, idx) => (
              <ListGroupItem
                key={idx}
                className="d-flex justify-content-between gap-1"
              >
                <span className="text-start">
                  {getPlanTitle(plan.plan)}
                  {plan.device && " + " + plan.device.name}{" "}
                </span>
                <span className="text-end">
                  {plan.device
                    ? formatCurrency(
                        getFinalPrice(
                          getPlanPrice(plan.plan),
                          plan.device.price
                        )
                      )
                    : formatCurrency(getPlanPrice(plan.plan))}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
          <span style={{ padding: "1rem" }}>
            Total: {formatCurrency(totalPrice)}/
            <span className="opacity-75">mo</span>
          </span>
        </>
      )}
    </div>
  );
}

export default MyPlansDropdown;
