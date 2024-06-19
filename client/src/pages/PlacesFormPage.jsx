import Perks from "../components/placeForm/Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";
import PreInput from "../components/placeForm/PreInput";
import Input from "../components/Input";
import CheckInOutInput from "../components/placeForm/CheckInOutInput";
import usePlaceForm from "../hooks/usePlaceForm";

export default function PlacesFormPage () {
    const {id} = useParams();
    const {
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
      } = usePlaceForm(id);

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <div>
        <AccountNav />
        <form onSubmit={savePlace}>
            <PreInput
            label="Title"
            description="Title for your place. should be short and catchy as in advertisement"
            >
                <Input
                    type="text"
                    value={title}
                    onChange={setTitle}
                    placeholder="title, for example: My lovely apt"
                />                
            </PreInput>
            <PreInput label="Address" description="Address to this place">
                <Input
                    type="text"
                    value={address}
                    onChange={setAddress}
                    placeholder="address"
                />                
            </PreInput>
            <PreInput label="Photos" description="More = better">
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            </PreInput>
            <PreInput
            label="Description"
            description="Description of the place"
            >
                <textarea value={description} onChange={(ev) => setDescription(ev.target.value)} />
            </PreInput>
            <PreInput label="Perks" description="Select all the perks of your place">
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks selected={perks} onChange={setPerks} />
                </div>
            </PreInput>            
            <PreInput label="Extra info" description="House rules, etc">
                <textarea value={extraInfo} onChange={(ev) => setExtraInfo(ev.target.value)} />
            </PreInput>            
            <PreInput label="Check in & out times" 
            description="Add check in and out times, remember to have some time window for cleaning the room between guests">
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <CheckInOutInput description="Check in time">
                        <Input
                            type="number"
                            value={checkIn}
                            onChange={setCheckIn}
                            placeholder="14"
                        />
                    </CheckInOutInput>                    
                    <CheckInOutInput description="Check out time">
                        <Input
                            type="number"
                            value={checkOut}
                            onChange={setCheckOut}
                            placeholder="11"
                        />
                    </CheckInOutInput>                    
                    <CheckInOutInput description="Max number of guests">
                        <Input
                            type="number"
                            value={maxGuests}
                            onChange={setMaxGuests}
                        />                        
                    </CheckInOutInput>
                    <CheckInOutInput description="Price per night">
                        <Input
                            type="number"
                            value={price}
                            onChange={setPrice}
                        />
                    </CheckInOutInput>
                </div>
            </PreInput>
            <button className="primary my-4">Save</button>
        </form>  
      </div>
    );
}