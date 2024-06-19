export default function Input({ type, value, onChange, placeholder, className }) {
    return (
      <input
        type={type}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeholder}
        className={className}
      />
  )
}
