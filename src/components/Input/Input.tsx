type InputPropsType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  value: string;
};
export const Input = ({onChange, placeholder, className, value}: InputPropsType) => {
  return <input type="text" onChange={onChange} className={className} placeholder={placeholder} value={value} />;
};
