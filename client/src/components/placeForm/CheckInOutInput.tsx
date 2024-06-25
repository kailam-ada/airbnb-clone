type CheckInOutInputProps = {
  description: string;
  children: React.ReactNode;
}

export default function CheckInOutInput({description, children}: CheckInOutInputProps) {
  return (
    <div>
        <h3 className="mt-2 -mb-1">{description}</h3>
        {children}
    </div>  
)
}
