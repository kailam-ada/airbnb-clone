import {differenceInCalendarDays, format} from "date-fns";
import CalendarIcon from "./icons/CalendarIcon";
import NightsIcon from "./icons/NightsIcon";
import { BookingType } from "../typescript/BookingType";

type BookingDatesProps = {
    booking: BookingType;
  }

export default function BookingDates({booking}: BookingDatesProps) {
    return (
        <div className="flex gap-1 mb-2 mt-4 text-gray-500">
            <NightsIcon />
            {differenceInCalendarDays(new Date(booking.checkOut),new Date(booking.checkIn))} nights:
            <div className="flex gap-1 items-center">
                <CalendarIcon />
                {format(new Date(booking.checkIn), 'yyyy-MM-dd')} 
            </div>
            &rarr;
            <div className="flex gap-1 items-center ml-2">
                <CalendarIcon />
                {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
            </div>
        </div>
    )
}