import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaceType } from "../typescript/PlaceType";

export default function usePlace() {
    const {id} = useParams<{ id: string }>();
    const [place,setPlace] = useState<PlaceType | null>(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data)
        })
    }, [id]);

    return { place };
}