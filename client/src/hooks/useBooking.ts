import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookingType } from "../typescript/BookingType";

export default function useBooking():BookingType|null {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<BookingType | null>(null);

  useEffect(() => {
    if (id) {
      axios.get<BookingType[]>("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  return booking;
}
