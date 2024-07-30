import { useState } from 'react';
import { FaEnvelope ,FaComments ,FaCommentAlt ,FaMusic , FaRegSmile, FaRegLaughBeam, FaRegLaughSquint, FaRegGrinStars } from 'react-icons/fa';

import CustomerSelect from './CustomerSelect';

const Types = ({ blessingType, setBlessingType, atmosphere, setAtmosphere }) => {
  const blessingTypeOptions = [
    { value: 'שיר מחורז', icon: <FaMusic  />, label: 'שיר מחורז' },
    { value: 'ברכה קצרה', icon: <FaCommentAlt  />, label: 'ברכה קצרה' },
    { value: 'ברכה ארוכה', icon: <FaComments  />, label: 'ברכה ארוכה' },
    { value: 'מכתב', icon: <FaEnvelope  />, label: 'מכתב' },
  ];

  const atmosphereOptions = [
    { value: 'שמחה', icon: <FaRegSmile />, label: 'שמחה' },
    { value: 'משעשעת', icon: <FaRegLaughBeam />, label: 'משעשעת' },
    { value: 'מצחיקה', icon: <FaRegLaughSquint />, label: 'מצחיקה' },
    { value: 'מרגשת', icon: <FaRegGrinStars />, label: 'מרגשת' },
  ];
  return (
    <>
      <br />
      <label htmlFor="blessing-type">
        <h2>איזה סוג ברכה?</h2>
      </label>
      <CustomerSelect
        options={blessingTypeOptions}
        value={blessingType}
        onChange={setBlessingType}
        placeholder="בחר סוג ברכה"
      />

      <br />
      <br />
      <label htmlFor="atmosphere">
        <h2>באיזו אווירה אתה בוחר את הברכה?</h2>
      </label>
      <CustomerSelect
        options={atmosphereOptions}
        value={atmosphere}
        onChange={setAtmosphere}
        placeholder="בחר אווירה לברכה"
      />
      <br />
      <br />
    </>
  );
};

export default Types;
