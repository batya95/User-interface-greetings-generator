import CustomerSelect from './CustomerSelect';
import {  FaBaby } from 'react-icons/fa';

const Baby = (props) => {
  const babyGenderOptions = [
    { value: 'זכר', icon: <FaBaby />, label: 'תינוק' },
    { value: 'נקבה', icon: <FaBaby />, label: 'תינוקת' },
  ];

  return (
    <>
      <div id="baby-questions" className="container">
        <label htmlFor="gender"> <h2>תינוק או תינוקת?</h2></label>
        <CustomerSelect
          options={babyGenderOptions}
          value={props.babyGender}
          onChange={props.setBabyGender}
          placeholder="בחר מין"
        />
      </div>
    </>
  );
};

export default Baby;
