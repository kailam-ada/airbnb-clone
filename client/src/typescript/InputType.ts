export type InputType = {
    type: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string; 
    className?: string; 
  }