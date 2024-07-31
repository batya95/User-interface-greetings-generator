import { useState } from 'react';
import CustomerSelect from './CustomerSelect';
import axios from 'axios';
import {
    FaBirthdayCake,
    FaBaby,
    FaRing,
    FaStarOfDavid,
    FaChild,
    FaFemale, FaCopy, FaUserCircle
} from 'react-icons/fa';
import pencilImage from '../images/pencil.png';
import Birthday from './Birthday';
import Wedding from './Wedding';
import Baby from './Baby';
import Types from './Types';

const eventOptions = [
    { value: "יומולדת", icon: <FaBirthdayCake />, label: "יומולדת" },
    { value: "הולדת תינוק", icon: <FaBaby />, label: "הולדת תינוק" },
    { value: "חתונה", icon: <FaRing />, label: "חתונה" },
    { value: "בר מצווה", icon: <FaStarOfDavid />, label: "בר מצווה" },
    { value: "חלאקה", icon: <FaChild />, label: "חלאקה" },
    { value: "בת מצווה", icon: <FaFemale />, label: "בת מצווה" }
];

const EventForm = () => {
    const [showResponse, setShowResponse] = useState(false);
    const [event, setEvent] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [babyGender, setBabyGender] = useState('');
    const [wedding, setWedding] = useState('');
    const [blessingType, setBlessingType] = useState('');
    const [atmosphere, setAtmosphere] = useState('');
    const [blessings, setBlessings] = useState([]);
    const [currentBlessingIndex, setCurrentBlessingIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const buildPrompt = () => {
        let prompt = `כתוב ברכה ל${name}, מין:${gender},`
        prompt += ` עבור: ${event}.`;
        if (event === 'יומולדת') {
            prompt += ` לגיל ${age} בחודש ${birthMonth}`;
        } else if (event === 'הולדת תינוק') {
            prompt += `מין התינוק הוא :${babyGender}.`;
        } else if (event === 'חתונה') {
            prompt += `זו ברכה עבור ${wedding} שמתחתנ/ת`;
        }
        prompt += ` הברכה צריכה להיות בסגנון ${blessingType}`;
        prompt += ` ובאווירה ${atmosphere}.`;

        return prompt;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = buildPrompt();

        try {
            const response = await axios.post('http://localhost:8989/prompts', { prompt });
            setBlessings(Object.values(response.data));
            setShowResponse(true);
        } catch (error) {
            console.error('Error fetching blessings:', error);
            if (error.response) {
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
            }
        }
    };
    const getNextBlessing = () => {
        setCurrentBlessingIndex(prevIndex => {
            if (prevIndex + 1 >= blessings.length) {
                handleSubmit();
            }
            return prevIndex + 1;
        });
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(blessings[currentBlessingIndex])
            .then(() => {
                alert('הברכה הועתקה ללוח!');
            })
            .catch(err => {
                console.error('שגיאה בהעתקה: ', err);
            });
    };
    return (
        <>
            <h1>
                <img id='image' src={pencilImage} alt="Pencil" />
                שלום<span id="white"> וברכה:)</span>
            </h1>
            <h2>צריכים ברכה? בשביל זה אנחנו פה!!!</h2>
            <hr />
            <div className="form-container">

                <form action="/promts" onSubmit={handleSubmit} >
                    <label htmlFor="age"><h3>עבור מי הברכה?</h3></label>
                    <input type="text" placeholder='שם:' id="age" value={name} onChange={(e) => setName(e.target.value)} />
                    {/* <input type="radio" id="gender" name="gender" value="זכר" checked={gender === 'זכר'} onChange={(e) => setGender(e.target.value)} />
                    <label><FaUserCircle /> זכר</label>
                    <input type="radio" id="gender" name="gender" value="נקבה" checked={gender === 'נקבה'} onChange={(e) => setGender(e.target.value)} />
                    <label><FaUserCircle /> נקבה</label> */}
                    <button  style={{ marginRight: '20px' }}
  onClick={() => setGender('זכר')} 
  className={gender === 'זכר' ? 'selected' : ''}
>
  <FaUserCircle /> זכר
</button>
<button 
  onClick={() => setGender('נקבה')} 
  className={gender === 'נקבה' ? 'selected' : ''}
>
  <FaUserCircle /> נקבה
</button>

                    <br />

                    {!showResponse ? (<>
                        <div className="form-group">
                            <h3>בחר את האירוע שלך:</h3>
                            <div className="custom-select">
                                <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
                                    {event ? (
                                        <>
                                            <div>
                                                <CustomerSelect
                                                    options={eventOptions}
                                                    value={event}
                                                    onChange={setEvent}
                                                    placeholder="בחירת אירוע"
                                                />
                                            </div>
                                        </>
                                    ) : 'בחירת אירוע'}
                                </div>




                                {isOpen && (
                                    <div className="select-items">
                                        {eventOptions.map((option) => (
                                            <div key={option.value} onClick={() => {
                                                setEvent(option.value);
                                                setIsOpen(false);
                                            }}>
                                                {option.icon} {option.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>


                        {event === 'יומולדת' && <Birthday
                            age={age}
                            setAge={setAge}
                            birthMonth={birthMonth}
                            setBirthMonth={setBirthMonth}
                        ></Birthday>}
                        {event === 'הולדת תינוק' && <Baby babyGender={babyGender} setBabyGender={setBabyGender}></Baby>}
                        {event === 'חתונה' && <Wedding wedding={wedding} setWedding={setWedding}></Wedding>}
                        {
                            event != '' && (
                                <Types
                                    blessingType={blessingType}
                                    setBlessingType={setBlessingType}
                                    atmosphere={atmosphere}
                                    setAtmosphere={setAtmosphere}
                                />

                            )
                        }
                    </>) : <div>
                        <div>
                            <p>אירוע: {event}</p>
                            <p>סוג ברכה: {blessingType}</p>
                            <p>אווירה: {atmosphere}</p>
                        </div>
                        <div>
                            <div>{blessings[currentBlessingIndex]}</div>
                            <button onClick={getNextBlessing}>אני רוצה משהו אחר</button>
                            {blessings[currentBlessingIndex] && (
                                <button onClick={copyToClipboard}>
                                    <FaCopy /> העתק ברכה
                                </button>
                            )}
                        </div>
                    </div>}

                    {
                        event != '' && !showResponse &&
                        (<button id="write-greeting" type='submit' >
                            כתוב לי ברכה!
                            <img id="small-image" src={pencilImage} alt="Pencil" />
                        </button>
                        )
                    }
                </form>
            </div>
            <br />
        </>
    );
};

export default EventForm;
