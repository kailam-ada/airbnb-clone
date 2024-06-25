import { InputType } from "../typescript/InputType";

export default function Input({ type, value, onChange, placeholder, className }:InputType) {
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
