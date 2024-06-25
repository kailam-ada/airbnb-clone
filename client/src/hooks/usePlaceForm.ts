import { useState, useEffect } from "react";
import axios from "axios";

type PlaceFormData = {
  title: string;
  address: string;
  addedPhotos: string[];
  description: string;
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: string;
  price: string;
  photos: string[];
};

type PlaceFormHookReturnType = PlaceFormData & {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setAddedPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setPerks: React.Dispatch<React.SetStateAction<string[]>>;
  setExtraInfo: React.Dispatch<React.SetStateAction<string>>;
  setCheckIn: React.Dispatch<React.SetStateAction<string>>;
  setCheckOut: React.Dispatch<React.SetStateAction<string>>;
  setMaxGuests: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  savePlace: (ev: React.FormEvent<HTMLFormElement>) => void;
  redirect: boolean;
};

export default function usePlaceForm(id?:string): PlaceFormHookReturnType {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState<string[]>([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [price, setPrice] = useState("");
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get<PlaceFormData>("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  async function savePlace(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      //update
      await axios.put("/places", {
        id,
        ...placeData,
      });
      setRedirect(true);
    } else {
      //new place
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }

  return {
    title,
    setTitle,
    address,
    setAddress,
    addedPhotos,
    setAddedPhotos,
    description,
    setDescription,
    perks,
    setPerks,
    extraInfo,
    setExtraInfo,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    maxGuests,
    setMaxGuests,
    price,
    setPrice,
    savePlace,
    redirect,
    photos: addedPhotos,
};
}
