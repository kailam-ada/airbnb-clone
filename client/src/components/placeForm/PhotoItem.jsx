import DeleteIcon from "../icons/DeleteIcon";
import MainPhotoIcon from "../icons/MainPhotoIcon";
import PhotoIcon from "../icons/PhotoIcon";
import Image from "../../Image.jsx";

export default function PhotoItem({ link, removePhoto, selectAsMainPhoto, addedPhotos }) {
  return (
    <div className="h-32 flex relative" key={link}>
        <Image className="rounded-2xl w-full object-cover" src={link} />
        <button onClick={ev => removePhoto(ev,link)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
            <DeleteIcon />
        </button>
        <button onClick={ev => selectAsMainPhoto(ev,link)} className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
            {link === addedPhotos[0] && (
                <MainPhotoIcon />
            )}
            {link !== addedPhotos[0] && (
                <PhotoIcon />
            )}
        </button>
    </div>  
    )
}
