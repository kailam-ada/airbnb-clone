import { PlaceType } from "./PlaceType";

export type BookingType = {
    _id: string;
    place: PlaceType;
    user: string;
    checkIn: Date;
    checkOut: Date;
    name: string;
    phone: string;
    price: number;
  }