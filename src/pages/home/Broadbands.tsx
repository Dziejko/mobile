import { FaCheck } from "react-icons/fa";
import { useSummaryCart } from "../../context/SummaryCartContext";

export type BroadbandsProps = {
  broadbandsRef: React.MutableRefObject<any>;
};

function broadbands({ broadbandsRef }: BroadbandsProps) {
  const { openCart } = useSummaryCart();
  return (
    <section ref={broadbandsRef} className="mt-4">
      <h2 className=" text-center fw-bold m-5 ">BROADBANDS</h2>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Basic</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $9.99
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>4G</li>
                  <li>10 users included</li>
                  <li>10GB Data</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  onClick={() => openCart(1)}
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Get Broadband
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $19.99
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>4G + LTE </li>
                  <li>20 users included</li>
                  <li>30GB Data</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  onClick={() => openCart(2)}
                  type="button"
                  className="w-100 btn btn-lg btn-primary"
                >
                  Get Broadband
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white border-primary bg-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29.99
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>5G + LTE</li>
                  <li>30 users included</li>
                  <li>Unlimited Data</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  onClick={() => openCart(3)}
                  type="button"
                  className="w-100 btn btn-lg btn-primary"
                >
                  Get Broadband
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className=" text-center fw-bold m-5 ">COMPARE broadbands</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Basic</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Public
                </th>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td></td>
                <td>
                  <FaCheck />
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td>
                  <FaCheck />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
}

export default broadbands;
