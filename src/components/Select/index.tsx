import React, { SelectHTMLAttributes } from 'react';
import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value:string;
    label:string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>
        <option value="" hidden disabled>Selecione uma opção</option>
        {
          options.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)
        }
      </select>
    </div>
  )
}

export default Select;
