import { FaCalendarAlt, FaCalendarCheck, FaCalendarMinus, FaCalendarPlus, FaCalendarTimes } from 'react-icons/fa';
import CustomerSelect from './CustomerSelect';

const Birthday = (props) => {
  const birthMonthOptions = [
    { value: 'תשרי', icon: <FaCalendarAlt />, label: 'תשרי' },
    { value: 'חשוון', icon: <FaCalendarCheck />, label: 'חשוון' },
    { value: 'כסליו', icon: <FaCalendarMinus />, label: 'כסליו' },
    { value: 'טבת', icon: <FaCalendarPlus />, label: 'טבת' },
    { value: 'שבט', icon: <FaCalendarTimes />, label: 'שבט' },
    { value: 'אדר', icon: <FaCalendarAlt />, label: 'אדר' },
    { value: 'ניסן', icon: <FaCalendarCheck />, label: 'ניסן' },
    { value: 'אייר', icon: <FaCalendarMinus />, label: 'אייר' },
    { value: 'סיון', icon: <FaCalendarPlus />, label: 'סיון' },
    { value: 'תמוז', icon: <FaCalendarTimes />, label: 'תמוז' },
    { value: 'אב', icon: <FaCalendarAlt />, label: 'אב' },
    { value: 'אלול', icon: <FaCalendarCheck />, label: 'אלול' },
  ];

  return (
    <>
      <div id="birthday-questions" className="container">
        <label htmlFor="age">
          <h3>לאיזה גיל מיועדת הברכה?</h3>
        </label>
        <input
          type="number"
          id="age"
          value={props.age}
          onChange={(e) => props.setAge(e.target.value)}
        />

        <label htmlFor="birthMonth">
          <h3>בחר חודש ליום ההולדת:</h3>
        </label>
        <CustomerSelect
          options={birthMonthOptions}
          value={props.birthMonth}
          onChange={props.setBirthMonth}
          placeholder="בחר חודש"
        />
      </div>
    </>
  );
};

export default Birthday;
