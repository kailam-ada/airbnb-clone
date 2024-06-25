import { useEffect, useState } from "react";
import axios from "axios";
import PlaceItem from "../components/PlaceItem";
import { PlaceType } from "../typescript/PlaceType";

export default function IndexPage() {
    const [places,setPlaces] = useState<PlaceType[]>([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, []);
    
    return(
        <div className="mt-8 grid gap-6 gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length > 0 && places.map(place => (
                <PlaceItem place={place} key={place._id}/>
            ))}
        </div>
    )
}