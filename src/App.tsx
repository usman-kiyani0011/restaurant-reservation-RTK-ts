import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerCart from "./components/CustomerCart";
import ReservationCart from "./components/ReservationCart";
import { addReservation } from "./store/features/reservationSlice";
import { RootState } from "./store/store";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const dispatch = useDispatch();
  const reservation = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const haldleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => (
                <ReservationCart name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={haldleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCart
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
