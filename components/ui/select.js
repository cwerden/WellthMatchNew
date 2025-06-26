import React from 'react';
export const Select = ({ name, value, onValueChange, children, required }) => (
  <select name={name} value={value} onChange={(e) => onValueChange(e.target.value)} required className='w-full p-2 border border-gray-300 rounded-md'>
    {children}
  </select>
);
export const SelectItem = ({ value, children, ...props }) => (
  <option value={value} {...props}>{children}</option>
);