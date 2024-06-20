import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import BookingItem from "../components/BookingItem";

export default function BookingsPage() {
    const [bookings,setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data)
        });
    }, []);
    return (
        <div>
            <AccountNav />
            <div>
                {bookings?.length > 0 && bookings.map(booking => (
                    <BookingItem key={booking._id} booking={booking}/>
                ))}
            </div>
        </div>
    );
}