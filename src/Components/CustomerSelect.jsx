import { useState } from 'react';
const CustomerSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
      <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          <>
            {options.find(option => option.value === value).icon}
            {' '}
            {options.find(option => option.value === value).label}
          </>
        ) : placeholder}
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div key={option.value} onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}>
              {option.icon} {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerSelect;
