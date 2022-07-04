import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../store/features/reservationSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addCustomer } from "../store/features/customerSlice";

interface ReservationCartTypes {
  name: string;
  index: number;
}

const ReservationCart = ({ name, index }: ReservationCartTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: nanoid(),
            name: name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCart;
