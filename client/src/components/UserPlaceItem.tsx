import { PlaceType } from "../typescript/PlaceType";
import PlaceImg from "./PlaceImg";
import { Link } from "react-router-dom";

type UserPlaceItemProps = {
    place: PlaceType;
  }

export default function UserPlaceItem({place}: UserPlaceItemProps) {
  return (
    <Link to={'/account/places/'+place._id} className="flex cursor-pointer  gap-4 bg-gray-100 p-4 rounded-2xl">
        <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
            <PlaceImg place={place} />
        </div>
        <div className="grow-0 shrink">
            <h2 className="text-xl">{place.title}</h2>
            <p className="text-sm mt-2">{place.description}</p>
        </div>
    </Link>  
    )
}
