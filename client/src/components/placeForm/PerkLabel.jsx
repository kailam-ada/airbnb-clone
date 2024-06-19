export default function PerkLabel({ name, icon, checked, onChange, description }) {
    return (
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            name={name}
            onChange={onChange}
            aria-label={name}
          />
          {icon}
          <span>{description}</span>
        </label>
      );
}
