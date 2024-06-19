import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function usePlace() {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
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