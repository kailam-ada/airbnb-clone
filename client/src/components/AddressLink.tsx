import AddressIcon from "./icons/AddressIcon";

interface AddressLinkProps {
    children: React.ReactNode;
    className?: string | null;
  }

export default function AddressLink({children,className = null}: AddressLinkProps) {
    if(!className) {
        className = 'my-3 block';
    }
    className += ' flex gap-1 font-semibold underline';
    return (
        <a className={className} target="_blank" href={'https://maps.google.com/?q='+children}>
        <AddressIcon />
        {children}
    </a>

    )
}