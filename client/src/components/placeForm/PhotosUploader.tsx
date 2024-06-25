import axios from "axios";
import { useState } from "react";
import UploadIcon from "../icons/UploadIcon.tsx";
import PhotoItem from "./PhotoItem.tsx";

type PhotosUploaderProps = {
    addedPhotos: string[];
    onChange: (callback: (prev: string[]) => string[]) => void;
  };

export default function PhotosUploader({addedPhotos,onChange}: PhotosUploaderProps) {
    const [photoLink,setPhotoLink] = useState('');

    async function addPhotoByLink(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink});
        onChange(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }

    function uploadPhoto(ev: React.ChangeEvent<HTMLInputElement>) {
        const files = ev.target.files;
        if (!files) {
            return;
          }
        const data = new FormData();

        for (let file of files) {
            data.append('photos', file);
        }          

        axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        })
        .then(response => {
            const {data:filenames} = response;
            onChange((prev: string[]) => {
                return [...prev, ...filenames];
            });
        })
    }

    function removePhoto(ev: React.MouseEvent<HTMLButtonElement>, filename: string) {
        ev.preventDefault();
        onChange(prev => [...prev.filter(photo => photo !== filename)]);
    }  

    function selectAsMainPhoto(filename: string) {
        onChange(prev => [filename, ...prev.filter(photo => photo !== filename)]);
    }

    // function selectAsMainPhoto(ev: React.MouseEvent<HTMLButtonElement>, filename: string) {
    //     ev.preventDefault();
    //     onChange(prevState => [filename, ...prevState.filter(photo => photo !== filename)]);
    // }

    return (
        <>
            <div className="flex gap-2">
                <input type="text"
                    value={photoLink}
                    onChange={ev => setPhotoLink(ev.target.value)}
                    placeholder={'Add using a link ...jpg'} />
                <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <PhotoItem 
                    key={link}
                    link={link}
                    removePhoto={removePhoto}
                    selectAsMainPhoto={() => selectAsMainPhoto(link)} 
                    addedPhotos={addedPhotos}/>
                ))}
                <label className="cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                    <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                    <UploadIcon />
                    Upload
                </label>
            </div>

        </>
    );
}