import { useState } from "react";
import Image from "./Image";
import CloseIcon from "./icons/CloseIcon";
import ShowMorePhotoIcon from "./icons/ShowMorePhotoIcon";
import { PlaceType } from "../typescript/PlaceType";

type PlaceGalleryProps = {place : PlaceType}

export default function PlaceGallery({place}:PlaceGalleryProps) {
    const [showAllPhotos,setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black text-white min-h-screen">
                <div className="bg-black p-8 grid gap-4">
                    <div>
                        <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                        <CloseIcon />
                            Close photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div key={place._id}>
                            <Image src={photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <div>
                {place.photos?.[0] && (
                    <div>
                        <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[0]} alt="" />
                    </div>
                )}
            </div>
            <div className="grid">
                {place.photos?.[1] && (
                    <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[1]} alt="" />
                )}
                <div className="overflow-hidden">
                {place.photos?.[2] && (
                    <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={place.photos[2]} alt="" />
                )}
                </div>
            </div>
        </div>
        <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-gray-500">
        <ShowMorePhotoIcon />
            Show more photos
        </button>
    </div>

    )
}