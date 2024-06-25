import { PlaceType } from "../typescript/PlaceType";
import Image from "./Image";
  
type PlaceImgProps = {
    place: PlaceType;
    index?: number;
    className?: string | null;
  }

export default function PlaceImg({place,index=0,className=null}: PlaceImgProps) {
    if (!place.photos?.length) {
        return '';
    }
    if (!className) {
        className = 'object-cover';
    }
    return (
        <Image className={className} src={place.photos[index]} alt="" />
    );
}