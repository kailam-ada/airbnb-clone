export default function PreInput({ label, description, children }) {
  return (
    <>
      <h2 className="text-2xl mt-4">{label}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
      {children}
    </>  
    );
}
