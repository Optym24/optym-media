// UpdatePasswordModal.jsx
import React, { useState } from 'react';
import { makeRequest } from '../../axios';

const UpdatePasswordModal = ({ onClose }) => {
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      await makeRequest.put('/users/password', { password });
      onClose();
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Password</h2>
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
