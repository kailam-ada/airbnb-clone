import PlaceImg from "./PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "./BookingDates";
import PriceIcon from "./icons/PriceIcon";
import { BookingType } from "../typescript/BookingType";

type BookingItemProps = { booking: BookingType }

export default function BookingItem({booking}: BookingItemProps) {
  return (
    <Link to={`/account/bookings/${booking._id}`} key={booking._id} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
        <div className="w-48">
            <PlaceImg place={booking.place} />
        </div>
        <div className="py-3 pr-3 grow">
            <h2 className="text-xl">{booking.place.title}</h2>
            <div className="text-xl">
                <BookingDates booking={booking}/>
                <div className="flex gap-1">
                    <PriceIcon />
                    <span className="text-2xl">
                        Total price: ${booking.price}
                    </span>
                </div>
            </div>
        </div>
    </Link>
    )
}
