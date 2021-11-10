import React from 'react';
import './style.scss';

const Profile: React.FC = () => {
  return (
    <div className="avatar-container">
      <img
        className="avatar-image"
        src="https://avatars.githubusercontent.com/krymancer"
      />
      <h1 className="avatar-name">Júnior Nascimento</h1>
    </div>
  );
};

export default Profile;
