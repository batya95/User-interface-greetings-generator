import Birthday from "./Birthday";
import Baby from "./Baby";
import Wedding from "./Wedding";
import Types from "./Types";

const FormContent = ({ event, setEvent, blessingType, setBlessingType, atmosphere, setAtmosphere 
    , age, setAge, birthMonth, setBirthMonth, babyGender, setBabyGender, wedding, setWedding
}) => {

    return (
        <>
            <h2>בחר את הארוע שלך:</h2>
            <select id="event-select" onChange={(e) => setEvent(e.target.value)}>
                <option>בחירת אירוע</option>
                <option value="birthday">יומולדת</option>
                <option value="baby">הולדת תינוק</option>
                <option value="wedding">חתונה</option>
                <option value="bar_mitzvah">בר מצווה</option>
                <option value="halakah"> חלאקה</option>
                <option value="bat_mitzvah">בת מצווה</option>
            </select>


            {event === 'birthday' && <Birthday age={age} setAge={setAge} birthMonth={birthMonth} setBirthMonth={setBirthMonth}></Birthday>}
            {event === 'baby' && <Baby babyGender={babyGender} setBabyGender={setBabyGender}></Baby>}
            {event === 'wedding' && <Wedding wedding={wedding} setWedding={setWedding}></Wedding>}

            {
                event != '' && (<Types blessingType={blessingType} setBlessingType={setBlessingType}
                    atmosphere={atmosphere} setAtmosphere={setAtmosphere}>

                </Types>
                )

            }


        </>
    );
};
export default FormContent;