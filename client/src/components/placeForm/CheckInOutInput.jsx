export default function CheckInOutInput({description, children}) {
  return (
    <div>
        <h3 className="mt-2 -mb-1">{description}</h3>
        {children}
    </div>  
)
}
