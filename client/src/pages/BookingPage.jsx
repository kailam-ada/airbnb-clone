import AddressLink from "../components/AddressLink";
import BookingDates from "../BookingDates";
import PlaceGallery from "../PlaceGallery";
import useBooking from "../hooks/useBooking";

export default function BookingPage() {

    const booking = useBooking();

    return (
        <div className="my-8">
            <h1 className="text-3xl">{booking.place.title}</h1>
            <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
            <div className="bg-gray-200 p-6 mb-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl mb-4">Your booking information:</h2>
                    <BookingDates booking={booking} />
                </div>
                <div className="bg-primary p-4 text-white rounded-2xl">
                    <div>
                        Total price
                    </div>
                    <div className="text-3xl">${booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    );
}