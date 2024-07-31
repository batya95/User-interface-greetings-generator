import { useState } from 'react';
import CustomerSelect from './CustomerSelect';
import { FaUserFriends, FaUserGraduate, FaUserTie, FaUserCircle } from 'react-icons/fa';


const Wedding = (props) => {
  const weddingOptions = [
    { value: 'אח', icon: <FaUserFriends />, label: 'אח' },
    { value: 'אחות', icon: <FaUserFriends />, label: 'אחות' },
    { value: 'אחיין', icon: <FaUserGraduate />, label: 'אחיין' },
    { value: 'אחיינית', icon: <FaUserGraduate />, label: 'אחיינית' },
    { value: 'נכד', icon: <FaUserCircle />, label: 'נכד' },
    { value: 'נכדה', icon: <FaUserCircle />, label: 'נכדה' },
    { value: 'חבר', icon: <FaUserTie />, label: 'חבר' },
    { value: 'חברה', icon: <FaUserTie />, label: 'חברה' },
  ];



  return (
    <>
      <div id="wedding-questions" className="container">
        <label htmlFor="wedd">מי מתחתן?</label>
        <CustomerSelect
          options={weddingOptions}
          value={props.wedding}
          onChange={props.setWedding}
          placeholder="בחר מי מתחתן"
        />
      </div>
    </>
  );
};

export default Wedding;
