import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import UserPlaceItem from "../components/UserPlaceItem";
import AddIcon from "../components/icons/AddIcon";
import { PlaceType } from "../typescript/PlaceType";

export default function PlacesPage() {
    const [places,setPlaces] = useState<PlaceType[]>([]);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div>
            <AccountNav />
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'} >
                        <AddIcon />
                        Add new place
                    </Link>
                </div>
                <div className="mt-4">
                    {places.length > 0 && places.map(place => (
                        <UserPlaceItem place={place} key={place._id}/>
                    ))}
                </div>
        </div>
    );
}