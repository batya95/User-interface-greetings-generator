import React from 'react';
import { FaTrash, FaPencilAlt, FaShareAlt } from 'react-icons/fa';

const BlessingsLibrary = ({ blessings, onEdit, onDelete, onShare }) => {
  return (
    <div className="blessings-library">
      <h1>ספריית הברכות</h1>
      {blessings.map((blessing) => (
        <div key={blessing.id} className="blessing-item">
          <div className="blessing-content">
            <h3>{blessing.event}</h3>
            <p>{blessing.content}</p>
          </div>
          <div className="blessing-actions">
            <button onClick={() => onEdit(blessing)}>
              <FaPencilAlt />
              ערוך
            </button>
            <button onClick={() => onDelete(blessing)}>
              <FaTrash />
              מחק
            </button>
            <button onClick={() => onShare(blessing)}>
              <FaShareAlt />
              שתף
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlessingsLibrary;

