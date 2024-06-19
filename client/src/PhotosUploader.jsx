import axios from "axios";
import { useState } from "react";
import UploadIcon from "./components/icons/UploadIcon";
import PhotoItem from "./components/placeForm/PhotoItem.jsx";

export default function PhotosUploader({addedPhotos,onChange}) {
    const [photoLink,setPhotoLink] = useState('');

    async function addPhotoByLink(ev) {
        ev.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink});
        onChange(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }

    function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();

        for (let file of files) {
            data.append('photos', file);
        }          

        axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        })
        .then(response => {
            const {data:filenames} = response;
            onChange(prev => {
                return [...prev, ...filenames];
            });
        })
    }

    function removePhoto(ev,filename) {
        ev.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !== filename)]);
    }

    function selectAsMainPhoto(ev,filename) {
        ev.preventDefault();
        onChange([filename,...addedPhotos.filter(photo => photo !== filename)]);
    }

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
                    removePhoto={(link) => removePhoto(link)}
                    selectAsMainPhoto={(link) => selectAsMainPhoto(link)} 
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