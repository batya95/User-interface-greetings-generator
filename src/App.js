import React, { useState, useEffect } from 'react';
import BlessingsLibrary from './Components/BlessingsLibrary';
import CreateBlessing from './Components/CreateBlessing';

const App = () => {
  const [blessings, setBlessings] = useState([]);

  useEffect(() => {
    // טען את הברכות מ-localStorage או sessionStorage
    const storedBlessings = localStorage.getItem('blessings');
    if (storedBlessings) {
      setBlessings(JSON.parse(storedBlessings));
    }
  }, []);

  const addBlessing = (newBlessing) => {
    const updatedBlessings = [...blessings, newBlessing];
    setBlessings(updatedBlessings);
    localStorage.setItem('blessings', JSON.stringify(updatedBlessings));
  };

  const editBlessing = (blessing) => {
    // העבר את הברכה לעריכה בקומפוננטת CreateBlessing
    <CreateBlessing initialBlessing={blessing} onSave={updateBlessing} />;
  };

  const updateBlessing = (updatedBlessing) => {
    const updatedBlessings = blessings.map((b) => (b.id === updatedBlessing.id ? updatedBlessing : b));
    setBlessings(updatedBlessings);
    localStorage.setItem('blessings', JSON.stringify(updatedBlessings));
  };

  const deleteBlessing = (blessing) => {
    const updatedBlessings = blessings.filter((b) => b.id !== blessing.id);
    setBlessings(updatedBlessings);
    localStorage.setItem('blessings', JSON.stringify(updatedBlessings));
  };

  const shareBlessing = (blessing) => {
    // שתף את הברכה, למשל באמצעות שליחת קישור או העתקת הטקסט
    navigator.clipboard.writeText(`${blessing.event}: ${blessing.content}`);
    alert('הברכה הועתקה ללוח!');
  };

  return (
    <div className="app">
      <BlessingsLibrary
        blessings={blessings}
        onEdit={editBlessing}
        onDelete={deleteBlessing}
        onShare={shareBlessing}
      />
      <CreateBlessing onSave={addBlessing} />
    </div>
  );
};

export default App;
