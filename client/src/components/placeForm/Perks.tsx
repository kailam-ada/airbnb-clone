import ParkingIcon from "../icons/ParkingIcon";
import PetIcon from "../icons/PetIcon";
import PrivateEntranceIcon from "../icons/PrivateEntranceIcon";
import RadioIcon from "../icons/RadioIcon";
import TvIcon from "../icons/TvIcon";
import WifiIcon from "../icons/WifiIcon";
import PerkLabel from "./PerkLabel";

type PerksProps = {
    selected: string[];
    onChange: (selected: string[]) => void;
  };

export default function Perks({selected,onChange}: PerksProps) {

    function handleCbClick(ev: React.ChangeEvent<HTMLInputElement>) {
        const {checked,name} = ev.target;
        if (checked) {
            onChange([...selected,name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <PerkLabel
                name="wifi"
                icon={() => <WifiIcon />}
                checked={selected.includes("wifi")}
                onChange={handleCbClick}
                description="Wifi"
            />
            <PerkLabel
                name="parking"
                icon={() => <ParkingIcon />}
                checked={selected.includes("parking")}
                onChange={handleCbClick}
                description="Free parking spot"
            />
            <PerkLabel
                name="tv"
                icon={() => <TvIcon />}
                checked={selected.includes("tv")}
                onChange={handleCbClick}
                description="Tv"
            />
            <PerkLabel
                name="radio"
                icon={() => <RadioIcon />}
                checked={selected.includes("radio")}
                onChange={handleCbClick}
                description="Radio"
            />
            <PerkLabel
                name="pets"
                icon={() => <PetIcon />}
                checked={selected.includes("pets")}
                onChange={handleCbClick}
                description="Pets allowed"
            />
            <PerkLabel
                name="entrance"
                icon={() =>  <PrivateEntranceIcon />}
                checked={selected.includes("entrance")}
                onChange={handleCbClick}
                description="Private entrance"
            />            
        </>
    );
}