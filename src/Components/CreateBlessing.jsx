import React, { useState } from 'react';

const CreateBlessing = ({ onSave, initialBlessing = {} }) => {
  const [blessing, setBlessing] = useState(initialBlessing);

  const handleChange = (e) => {
    setBlessing({ ...blessing, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(blessing);
  };

  return (
    <div className="create-blessing">
      <h2>{initialBlessing.id ? 'ערוך ברכה' : 'צור ברכה חדשה'}</h2>
      <div>
        <label htmlFor="event">סוג אירוע:</label>
        <input type="text" id="event" name="event" value={blessing.event} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="content">תוכן הברכה:</label>
        <textarea id="content" name="content" value={blessing.content} onChange={handleChange} />
      </div>
      <button onClick={handleSave}>שמור</button>
    </div>
  );
};

export default CreateBlessing;


