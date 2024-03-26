// UpdateModal.jsx
import React, { useState } from 'react';
import { makeRequest } from '../../axios';

const UpdateModal = ({ userId, currentName, onClose, onUpdate }) => {
  const [name, setName] = useState(currentName);

  const handleUpdate = async () => {
    try {
      await makeRequest.put(`/users/${userId}`, { name });
      onUpdate(name);
      onClose();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Name</h2>
        <label>
          New Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateModal;
