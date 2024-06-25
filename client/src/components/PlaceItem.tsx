import { Link } from "react-router-dom";
import Image from "./Image";
import { PlaceType } from "../typescript/PlaceType";
  
  type PlaceItemProps = {
    place: PlaceType;
  }

export default function PlaceItem({place}: PlaceItemProps) {
  return (
    <Link to={'/place/'+place._id}>
        <div className="bg-gray-500 mb-2 rounded-2xl flex">
        {place.photos?.[0] && (
            <Image className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt="" />
        )}
        </div>
        <h2 className="font-bold">{place.address}</h2>
        <h3 className="text-sm text-gray-500">{place.title}</h3>
        <div className="mt-2">
            <span className="font-bold">${place.price}</span> per night
        </div>
    </Link>  
)
}
